# Generated by Django 3.1.3 on 2020-11-08 17:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='is_admin',
            field=models.BooleanField(default=False),
        ),
    ]