from django.contrib import admin
from django.urls import path
from . import login_view
urlpatterns = [
    path('login/', login_view.login)
]
