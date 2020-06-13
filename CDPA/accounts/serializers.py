from rest_framework import serializers
from django.contrib.auth import get_user_model, authenticate
from django.db.models import Q

User = get_user_model()

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "email")


# Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
  class Meta:
    model = User
    fields = ('id', 'username', 'email', 'password')
    extra_kwargs = {'password': {'write_only': True}}

  def create(self, validated_data):
    user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])

    return user

# Login Serializer
class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField(allow_blank=True, required=False)
    email = serializers.EmailField(
        label="Email Address", allow_blank=True, required=False
    )

    class Meta:
        model = User
        fields = ["username", "email", "password"]

    def validate(self, data):
        user_obj = None
        username = data.get("username", None)
        email = data.get("email", None)
        password = data["password"]
        if not email and not username:
            raise serializers.ValidationError(
                "A Username or Email Address is required to Login"
            )
        user = User.objects.filter(Q(email=email) | Q(username=username)).distinct()
        if user.exists() and user.count() == 1:
            user_obj = user.first()
        else:
            raise serializers.ValidationError(
                "The Username/Email Address entered is not valid."
            )
        if user_obj:
            if not user_obj.check_password(password):
                raise serializers.ValidationError(
                    "Incorrect Credentials. Please Try Again."
                )

        return user_obj
