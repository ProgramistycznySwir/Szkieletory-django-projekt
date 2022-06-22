import uuid
from django.db import models
from django.contrib.auth.models import User
from django.dispatch import receiver

# Create your models here.
'''
Files(
  ID: GUID,
  ParentID: GUID,
  Name: string,
  Type: string,
  Size: u64,
  IsFile: bool)

Users(
  ID: GUID,
  RootDirectoryID: GUID,
  EMail: string)

Group(
  ID: GUID,
  RootDirectoryID: GUID,
  Name: string)
'''
@receiver(models.signals.post_save, sender=User)
def execute_after_save(sender, instance, created, *args, **kwargs):
  if created:
    dir = Directory(name= 'root', contents_size= 0)
    dir.save()
    prof = Profile(user= instance, root_directory= dir)
    prof.save()

class File(models.Model):
  id = models.UUIDField(
    primary_key = True,
    default = uuid.uuid4,
    editable = False)
  parent_directory = models.ForeignKey(to= 'Directory', on_delete= models.CASCADE)
  name = models.TextField(max_length=64)
  type = models.CharField(max_length=12)
  size = models.BigIntegerField()
  def __str__(self):
    return self.name

class Directory(models.Model):
  id = models.UUIDField(
    primary_key = True,
    default = uuid.uuid4,
    editable = False)
  parent_directory = models.ForeignKey(to= 'Directory', on_delete= models.CASCADE, blank=True, default=None, null=True)
  name = models.TextField(max_length= 64)
  contents_size = models.BigIntegerField()

  # @property
  # def profile(self):
  #   try:
  #     return self.profile
  #   except DoesNotExist:
  #     return None
  # @profile.setter
  # def profile(self, profile):
  #   self.profile = profile

  class Meta:
    verbose_name = "Directory"
    verbose_name_plural = "Directories"
  def __str__(self):
    if(self.parent_directory is None):
      return f'{self.profile}:root'
    return self.name

class Profile(models.Model):
  id = models.UUIDField(
    primary_key = True,
    default = uuid.uuid4,
    editable = False)
  user = models.OneToOneField(User, on_delete=models.CASCADE)
  root_directory = models.OneToOneField(to= Directory, on_delete= models.CASCADE)
  # email = models.EmailField()
  def __str__(self):
    return self.user.username

class Group(models.Model):
  id = models.UUIDField(
    primary_key = True,
    default = uuid.uuid4,
    editable = False)
  root_directory = models.ForeignKey(to= Directory, on_delete= models.CASCADE)
  name = models.TextField(max_length=64)
  def __str__(self):
    return self.name