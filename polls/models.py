import uuid
from django.db import models
from django.contrib.auth.models import User

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

class File(models.Model):
	id = models.UUIDField(
		primary_key = True,
		default = uuid.uuid4,
		editable = False)
	parent_directory = models.ForeignKey(to= 'File', on_delete= models.CASCADE, blank=True, default=None, null=True)
	name = models.TextField()
	type = models.CharField(max_length=12)
	size = models.BigIntegerField()
	is_file = models.BooleanField()

class Profile(models.Model):
    id = models.UUIDField(
        primary_key = True,
        default = uuid.uuid4,
        editable = False)
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    root_directory = models.ForeignKey(to= File, on_delete= models.CASCADE)
	# email = models.EmailField()

class Group(models.Model):
	id = models.UUIDField(
		primary_key = True,
		default = uuid.uuid4,
		editable = False)
	root_directory = models.ForeignKey(to= File, on_delete= models.CASCADE)
	name = models.TextField()