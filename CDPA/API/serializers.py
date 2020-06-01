from rest_framework.serializers import ModelSerializer
from API.models import PredImages

# PredImages Serializer
class PredImagesSerializer(ModelSerializer):
    class Meta:
        model = PredImages
        fields = "__all__"

