from django.contrib import admin
from django.urls import path,include
from django_app import apis

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('django_app.urls')),
    path(r'api/',include(apis.router.urls)),
]
