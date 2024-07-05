import requests
from rest_framework.views import APIView
from rest_framework.response import Response
from django.conf import settings

# Create your views here.
class WeatherView(APIView):
    def get(self, request, format=None):
        location = request.GET.get('location')
        api_key =settings.WEATHER_API_KEY
        url = f'http://api.openweathermap.org/data/2.5/weather?q={location}&appid={api_key}&units=metric'
        response = requests.get(url)
        return Response(response.json())