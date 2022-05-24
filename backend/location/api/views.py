from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import Postmodelserializer
from ..models import location
from django.contrib.auth.models import User

@api_view(['GET','POST'])
def address_list(request):
    if request.method == 'GET':
        qp = location.objects.all()
        serializer1 = Postmodelserializer(qp, many = True)
        return Response(serializer1.data)

    elif request.method == 'POST':
        serializer1 = Postmodelserializer(data = request.data)
        if serializer1.is_valid():
            print(request.data)
            user= User.objects.get(username=request.data['author'])
            serializer1.save(author=user)
            return Response(serializer1.data, status=status.HTTP_201_CREATED)
        return Response(serializer1.errors, status= status.HTTP_400_BAD_REQUEST)