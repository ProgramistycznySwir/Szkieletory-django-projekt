from .models import File, Profile, Group
from django.contrib.auth.models import User
from rest_framework import serializers


class FileIDSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = ['id']
class FileSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = File
        fields = ['id', 'parent_directory', 'name', 'type', 'size', 'is_file']


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username']
class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    # user = serializers.PrimaryKeyRelatedField(many=True, queryset=User.objects.all())
    user = UserSerializer()
    root_directory = FileIDSerializer()
    class Meta:
        model = Profile
        fields = ['id', 'user', 'root_directory']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'root_directory', 'name']

