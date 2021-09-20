from rest_framework import viewsets, routers
from django_app.models import UserModel
from django_app.serializers import UserModelSerializer

class UserModelViewSet(viewsets.ModelViewSet):
    queryset = UserModel.objects.all()
    serializer_class = UserModelSerializer

router = routers.DefaultRouter()
router.register(r'users',UserModelViewSet)    