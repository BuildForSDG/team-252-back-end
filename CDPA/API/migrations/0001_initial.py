# Generated by Django 3.0.7 on 2020-06-12 09:27

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PredImages',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='Pred_Images')),
                ('prediction', models.CharField(blank=True, max_length=100, null=True)),
                ('uploaded_on', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]
