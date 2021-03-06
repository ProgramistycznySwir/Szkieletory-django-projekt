# import namespace as namespace
from django.urls import path, include
from rest_framework import routers
# from .views import *

from . import views

router = routers.DefaultRouter()
router.register(r'file', views.FileViewSet)
# router.register(r'fileTransfer', views.TransferFileViewSet)
router.register(r'dir', views.DirectoryViewSet)
router.register(r'profile', views.ProfileViewSet)
router.register(r'group', views.GroupViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('register/', views.RegisterUserView.as_view(), name="create_user"),
]
