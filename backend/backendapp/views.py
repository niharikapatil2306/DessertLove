from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import *
from .serializer import *

class UserView(APIView):
    serializer_class = UserSerializer

    def post(self, request):
    
        if request.method == 'POST':
            data = {
                'id' : request.data.get('id'),
                'name' : request.data.get('name'),
                'email' : request.data.get('email'),
            }

        serializer = UserSerializer(data=data)

        if User.objects.filter(id=data['id']).exists():
            return Response("already added.")
        else:
            if serializer.is_valid():
                User.objects.create(**data)
            return Response(serializer.data['id'], status=status.HTTP_201_CREATED)
