from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class location(models.Model):
    monthlybill = models.CharField(max_length=10)
    nopih = models.CharField(max_length=2)
    address = models.CharField(max_length=200)
    states = models.CharField(max_length=30)
    created = models.DateTimeField(auto_now_add=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    
    
    def __str__(self):
        return str(self.monthlybill)

    def __str__(self):
        return str(self.states)

    def __str__(self):
        return str(self.nopih)

    def __str__(self):
        return str(self.address)

    
