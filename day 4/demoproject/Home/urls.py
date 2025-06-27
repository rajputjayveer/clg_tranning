from django.urls import path
from . import views

urlpatterns = [
    path('',views.index , name="MainPage"),
    path('properties/', views.properties ,name="PropertiesPage"),
    path('propertiesdetail/', views.propertiesdetail ,name="propertiesdetailPage"),
    path('contact/', views.contact ,name="contactPage"),
    path('UserLogin/', views.UserLogin ,name="UserLoginPage"),
    path('UserRegisterView/', views.UserRegisterView ,name="UserRegisterView")
]
