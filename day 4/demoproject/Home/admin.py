from django.contrib import admin

# Register your models here.
from Home.models import UserProfile
from Home.models import room


# admin.site.register(UserProfile)
admin.site.register(room)

class UserprofileAdmin(admin.ModelAdmin):
    list_display = ['first_name','email','address','gender','profile','document','status','age','created_at','website_name' ]
    search_fields = ['email']
    list_filter = ['gender']
    list_per_page = 10


admin.site.register(UserProfile , UserprofileAdmin)