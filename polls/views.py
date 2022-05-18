from .models import File, User, Group
from rest_framework import viewsets
from .serializer import FileSerializer, UserSerializer, GroupSerializer


class FileViewSet(viewsets.ModelViewSet):
    queryset = File.objects.all()
    serializer_class = FileSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class Group(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
