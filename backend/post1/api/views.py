from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import Postmodelserializer
from ..models import Post
from django.contrib.auth.models import User

@api_view(['GET','POST'])
def post_list(request):
    if request.method == 'GET':
        qs = Post.objects.all()
        serializer = Postmodelserializer(qs, many = True)
        return Response(serializer.data)

    elif request.method == 'POST' :
        serializer =Postmodelserializer(data=request.data)
        if serializer.is_valid():
            print(request.data)
            user= User.objects.get(username=request.data['author'])
            serializer.save(author=user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)
