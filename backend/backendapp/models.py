from django.db import models
import uuid

class User(models.Model):
    id = models.CharField(primary_key=True, max_length=255)
    name = models.CharField(max_length=100)
    email = models.EmailField()
