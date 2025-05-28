from django.urls import path
from .views import register,loginview
from . import views

urlpatterns=[
    path('register/',register,name='register'),
    path('loginview/',loginview,name='loginview'),
     path('register/', views.register, name='register'),
]