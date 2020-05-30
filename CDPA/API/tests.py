from django.test import TestCase
from .models import PredImages

# Create your tests here.
class TestPredImagesModel(TestCase):
    def test_add_a_plus_b(self):
        a = 1
        b = 2
        c = a + b

        self.assertEqual(c, 3)
