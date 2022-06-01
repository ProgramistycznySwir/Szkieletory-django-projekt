# import namespace as namespace
from django.urls import path, include
from rest_framework import routers
from .views import FileViewSet, ProfileViewSet, GroupViewSet

from . import views

router = routers.DefaultRouter()
router.register(r'file', FileViewSet)  # Jesli zapytanie zawiera taki string to przekieruj do FileViewSet
router.register(r'profile', ProfileViewSet)
router.register(r'group', GroupViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
