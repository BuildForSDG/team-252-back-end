from rest_framework import viewsets, permissions

from API.models import PredImages
from API.serializers import PredImagesSerializer

# PredImages ViewSet
class PredImagesViewSet(viewsets.ModelViewSet):
    queryset = PredImages.objects.all()
    permission_classes = [permissions.AllowAny]

    serializer_class = PredImagesSerializer
