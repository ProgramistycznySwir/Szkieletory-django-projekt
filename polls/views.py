from rest_framework import viewsets, generics
from .models import File, Profile, Group
from .serializer import *
from rest_framework.permissions import AllowAny, BasePermission, SAFE_METHODS

# class PublicFileViewSet(viewsets.ViewSet):
#     permission_classes = [AllowAny]
#     queryset = File.objects.all()
#     serializer_class = FileSerializer

class OwnerTransferPermission(BasePermission):
    message = "Uploading files is restricted only to owner!"

    def has_object_permission(self, request, view, obj):
        if(request.method in SAFE_METHODS):
            return obj.parent_directory.is_public
        if(request.method is 'GET' or 'POST'):
            return obj.getRootDir().profile.user == request.user
        return False
class OwnerPermission(BasePermission):
    message = "Any access to data about this item is restricted only to owner!"

    def has_object_permission(self, request, view, obj):
        return obj.getRootDir().profile.user == request.user
# class TransferFileViewSet(viewsets.ViewSet, OwnerTransferPermission):
# class TransferFileViewSet(generics.RetrieveAPIView, OwnerTransferPermission):
#     permission_classes = [OwnerTransferPermission]
#     queryset = File.objects.all()
#     serializer_class = FileSerializer
    # def create(self, request):
    #     pass
    # def retrieve(self, request, pk=None): # Download
    #     pass # TODO make this method return anything

# class FileViewSet(generics.RetrieveUpdateDestroyAPIView):
class FileViewSet(viewsets.ModelViewSet, OwnerPermission):
    permission_classes = [OwnerPermission]
    queryset = File.objects.all()
    serializer_class = FileSerializer

class DirectoryViewSet(viewsets.ModelViewSet, OwnerPermission):
    permission_classes = [OwnerPermission]
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