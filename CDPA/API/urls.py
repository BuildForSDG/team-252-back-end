from rest_framework import routers
from API.api import PredImagesViewSet

router = routers.DefaultRouter()
router.register("api/predict", PredImagesViewSet, "image_pred")

urlpatterns = router.urls
