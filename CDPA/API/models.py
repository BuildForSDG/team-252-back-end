from django.db import models
from django.conf import settings

import os
import json
import torch
from torchvision import transforms, models as md
from PIL import Image

# Create your models here.
class PredImages(models.Model):
    image = models.ImageField(upload_to="Pred_Images")
    prediction = models.CharField(max_length=100, blank=True, null=True)
    uploaded_on = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.prediction = self.classify(self.image)
        super(PredImages, self).save(*args, **kwargs)

    def classify(self, image):
        img = Image.open(image).convert("RGB")
        img_tensor = self.transform(img)
        prediction_model = self.load_model()
        prediction_model.eval()
        with torch.no_grad():
            output = prediction_model(img_tensor)
            pred = torch.argmax(output).item()
            target = torch.max(output).numpy()
            print(pred)
            print(target)
        if target > 1.0:
            classes = self.load_class_names()
            self.prediction = classes[pred]
        else:
            self.prediction = "Unknown"

        return self.prediction

    def load_class_names(self):
        saved_classes_file = "classes.json"
        classes_file_path = os.path.join(settings.MODEL_ROUTE, saved_classes_file)
        classes = []
        with open(classes_file_path, "r") as f:
            classes_dict = json.load(f)
            for _, value in classes_dict.items():
                classes.append(value)
        return classes

    def load_model(self):
        saved_model = "model_transfer.pt"
        model_path = os.path.join(settings.MODEL_ROUTE, saved_model)
        device = torch.device("cpu")
        model = md.resnet50(pretrained=True)
        classes = self.load_class_names()
        final_layer = torch.nn.Linear(2048, len(classes))
        model.fc = final_layer
        model.load_state_dict(torch.load(model_path, map_location=device))

        return model

    def transform(self, img):
        image_preprocess = transforms.Compose(
            [
                transforms.Resize(224),
                transforms.CenterCrop(224),
                transforms.ToTensor(),
                transforms.Normalize(
                    [0.4548, 0.4758, 0.3215], [0.4548, 0.4758, 0.3215]
                ),
            ]
        )
        image_tensor = image_preprocess(img).unsqueeze(0)
        return image_tensor
