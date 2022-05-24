from django.urls import path
from .views import callback_list

urlpatterns =[
    path('callback/',callback_list)
]