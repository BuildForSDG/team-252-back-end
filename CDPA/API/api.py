from rest_framework import viewsets, permissions

from API.models import PredImages
from API.serializers import PredImagesSerializer

# PredImages ViewSet
class PredImagesViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = PredImagesSerializer
    ordering = ["-uploaded_on"]

    def get_queryset(self):
        return self.request.user.predictions.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
