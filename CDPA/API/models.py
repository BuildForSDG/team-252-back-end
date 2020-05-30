from django.db import models

# Create your models here.
class PredImages(models.Model):
    images = models.ImageField(upload_to="Pred_Images")
    prediction = models.CharField(max_length=100)
    uploaded_on = models.DateTimeField(auto_now_add=True)
