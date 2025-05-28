from django.shortcuts import render, redirect
import json
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


from django.core.mail import send_mail
from django.conf import settings
from django.contrib import messages

 # Your form

@csrf_exempt
def register(request):
    if request.method=='POST':
        try:
            data=json.loads(request.body)
            username=data.get('username')
            email=data.get('email')
            password = data.get('password')
            if not username or not email or not password:
                return JsonResponse({"Error":"Fill details"})
            if User.objects.filter(username=username).exists():
                return JsonResponse({"Exists":"already"},status=400)
            else:
                User.objects.create_user(username=username,email=email,password=password)
                send_mail(
    subject='Registration Success✅!',
    message='Thank you for registering ❤️. /n/n Stay tuned!!!',
    from_email="ania08333@gmail.com",
    recipient_list=[email],
    fail_silently=False,
)

                return JsonResponse({"Success":"Registered successfully"},status=200)
        except Exception as e:
            return JsonResponse({"error":"Something went wrong"},status=500)
    else:
        return JsonResponse({"Error":"give correct method"})












@csrf_exempt
def loginview(request):
    if request.method=='POST':
        try:
            data=json.loads(request.body)
            username=data.get('username')
            password=data.get('password')
            if not username or not password:
                return JsonResponse({"Error":"Fill details"})
            user=authenticate(request,username=username,password=password)
            if user is not None:
                login(request,user)
                return JsonResponse({"Sucsess":"Login Successful"},status=200)
            else:
                return JsonResponse({"Failed":"No user found"},status=400)
        except Exception as e:
            return JsonResponse({"Error":str(e)})
    else:
        return JsonResponse({"error":"Not post method"})