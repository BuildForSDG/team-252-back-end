# Generated by Django 3.0.6 on 2020-05-31 02:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('API', '0002_auto_20200531_0503'),
    ]

    operations = [
        migrations.AlterField(
            model_name='predimages',
            name='prediction',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
    ]
