from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class callback(models.Model):
    name = models.CharField(max_length=50)
    emailid = models.CharField(max_length=50)
    phonenumber = models.CharField(max_length=20)
    recKw = models.CharField(max_length=10)
    created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    
    
    def __str__(self):
        return str(self.name)

    def __str__(self):
        return str(self.emailid)

    def __str__(self):
        return str(self.phonenumber)

    def __str__(self):
        return str(self.recKw)

