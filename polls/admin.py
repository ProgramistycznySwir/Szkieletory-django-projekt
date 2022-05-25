from django.contrib import admin

# Register your models here.


from .models import *

admin.site.register(File)
admin.site.register(Profile)
admin.site.register(Group)