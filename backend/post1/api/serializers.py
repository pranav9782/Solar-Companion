from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from ..models import Post

class Postmodelserializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()
    created = serializers.SerializerMethodField()
    class Meta:
        model = Post
        fields = ['id','title','description','created','author']

    def get_author(self,obj):
        print(self)
        print(obj)
        return obj.author.username
    
    def get_created(self, obj):
        return obj.created.strftime("%d/%m/%Y, %H:%M:%S")
