from rest_framework import viewsets, generics
from .models import File, Profile, Group
from .serializer import *
from rest_framework.permissions import AllowAny

class PublicFileViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]
    queryset = File.objects.all()
    serializer_class = FileSerializer
class TransferFileViewSet(viewsets.ViewSet):
    # permission_classes = [AllowAny]
    queryset = File.objects.all()
    serializer_class = FileSerializer
    def create(self, request):
        pass
    def retrieve(self, request, pk=None): # Download
        pass

# class FileViewSet(generics.RetrieveUpdateDestroyAPIView):
class FileViewSet(viewsets.ModelViewSet):
    # permission_classes = [AllowAny]
    queryset = File.objects.all()
    serializer_class = FileSerializer

class DirectoryViewSet(viewsets.ModelViewSet):
    queryset = Directory.objects.all()
    serializer_class = DirectorySerializer

# class FileDetailsViewSet(viewsets.ModelViewSet):
#     queryset = File.objects.all()
    # serializer_class = SubFileSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer