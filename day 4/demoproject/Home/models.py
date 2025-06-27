from django.db import models

# Create your models here.
class UserProfile(models.Model):
    first_name = models.CharField(max_length=20)
    email = models.EmailField(max_length=50)
    address = models.TextField()
    gender = models.CharField(max_length=10, choices=[
        ('M', 'Male'),
        ('F', 'Female')
    ])
    profile = models.ImageField('user/Images')
    document = models.FileField('Documents/Images')
    status = models.BooleanField(default=False)
    age = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=False)
    website_name = models.URLField()

    def __str__(self):
        return self.first_name
     

class room(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    roomNumber = models.CharField(max_length=20)
    
    def __str__(self):
        return self.roomNumber