from django.urls import path
from .views import address_list

urlpatterns =[
    path('address/',address_list)
]