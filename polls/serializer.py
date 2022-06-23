from .models import File, Directory, Profile, Group
from django.contrib.auth.models import User
from rest_framework import serializers


class SubFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = File
        fields = ['id', 'name', 'type', 'size']

# class SubDirSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Directory
#         fields = ['id', 'name', 'contents_size']

class FileSerializer(serializers.HyperlinkedModelSerializer):
    # parent_directory = SubDirSerializer
    class Meta:
        model = File
        fields = ['id', 'parent_directory', 'name', 'type', 'size']

class DirectorySerializer(serializers.HyperlinkedModelSerializer):
    # parent_directory = SubDirSerializer(required=False)
    files = SubFileSerializer(many=True, read_only=True) # Here add query
    # files = serializers.PrimaryKeyRelatedField(queryset=File.objects.all(), many=True)
    # files = serializers.PrimaryKeyRelatedField(many=True, read_only=True)
    class Meta:
        model = Directory
        fields = ['id', 'parent_directory', 'name', 'contents_size', 'files']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    # user = serializers.PrimaryKeyRelatedField(many=True, queryset=User.objects.all())
    user = UserSerializer()
    # root_directory = FileIDSerializer
    class Meta:
        model = Profile
        fields = ['id', 'user', 'root_directory']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'root_directory', 'name']


class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}
    
    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

