from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login ,logout
from .form import UserRegister

# Create your views here.
def index(request):
    # return HttpResponse("<h1>Hello world</h1>")
    return render(request , "index.html")
     
def properties(request):
    return render(request , "properties.html")

def propertiesdetail(request):
    return render(request , "property-details.html")

def contact(request):
    return render(request , "contact.html")

def UserLogin(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(username=username,password=password)
        if user is not None:
            login(user)
            return redirect("MainPage")
        else:
            return render(request,"Login.html",{'msg':"invalid username or password"})

    return render(request , "Login.html")


def UserRegisterView(request):
        data = UserRegister(request.POST)
        return render(request , "register.html" , {'data':data})