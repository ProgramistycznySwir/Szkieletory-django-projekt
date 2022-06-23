from rest_framework import viewsets, generics, status
from django.shortcuts import get_object_or_404
from rest_framework.permissions import AllowAny, BasePermission, SAFE_METHODS
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import File, Profile, Group
from .serializer import *

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

# class DirectoryAPIView(generics.RetrieveAPIView):
# class DirectoryAPIView(generics.RetrieveUpdateDestroyAPIView):
class DirectoryViewSet(viewsets.GenericViewSet, OwnerPermission):
    permission_classes = [OwnerPermission]
    queryset = Directory.objects.all()
    serializer_class = DirectorySerializer

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
        if(serializer.validated_data.get('parent_directory') not in self.queryset):
            return Response("You have to specify parent directory for this element!!!", status.HTTP_400_BAD_REQUEST)
        newDir = serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    def retrieve(self, request, pk=None):
        item = get_object_or_404(self.queryset, pk=pk)
        serializer = self.get_serializer(item)
        return Response(serializer.data)

# class FileDetailsViewSet(viewsets.ModelViewSet):
#     queryset = File.objects.all()
    # serializer_class = SubFileSerializer


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class RegisterUserView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request):
        serializer = RegisterUserSerializer(data= request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status.HTTP_400_BAD_REQUEST)
        serializer.save()
        return Response(serializer.validated_data, status.HTTP_201_CREATED)
