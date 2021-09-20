from rest_framework import serializers
from django_app.models import UserModel

class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('user','age')