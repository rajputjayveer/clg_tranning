# Generated by Django 5.2.2 on 2025-06-09 05:59

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=20)),
                ('email', models.EmailField(max_length=50)),
                ('address', models.TextField()),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=10)),
                ('profile', models.ImageField(upload_to='', verbose_name='user/Images')),
                ('document', models.FileField(upload_to='', verbose_name='Documents/Images')),
                ('status', models.BooleanField(default=False)),
                ('age', models.IntegerField()),
                ('created_at', models.DateTimeField()),
                ('website_name', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='room',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('roomNumber', models.CharField(max_length=20)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Home.userprofile')),
            ],
        ),
    ]
