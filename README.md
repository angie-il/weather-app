# Weather Application

This project is a simple weather application built with React on the frontend and Django on the backend. It retrieves weather data from the OpenWeatherMap API based on user input.

## Technologies Used
- **Frontend**: React, Axios
- **Backend**: Django, Django REST Framework
- **API**: OpenWeatherMap API

## Features
- Users can enter a city name to fetch current weather data.
- Displays temperature in Celsius, weather description and city name based on API response of the user's input.
- Responsive design for movile and desktop browsers.

## Getting started
To get a local copy of this project up and running, follow these steps:

### Prerequisities
- Node.js and npm installed on your machine.
- Python and Django installed on your machine.
- An API key from OpenWeatherMap (insert your API key in the Django backend).

## Installation
- Clone the repository
  
``` 
  git clone https://github.com/angie-il/weather-app.git
  cd weather-app/weather_project
```

- Set up the backend

```
  python -m venv env
  source env/bin/activate

  pip install django
  pip install -r requirements.txt
  pip install requests

```

- Generate SECRET_KEY
  
```
  python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'
```
  
- Copy .env.example to .env and add the generated key to your .env add your OpenWeatherMap API key that you got from **https://home.openweathermap.org/api_keys**.

```
  cp .env.example .env

  SECRET_KEY= 'GENERATED KEY'
  WEATHER_API_KEY='OPENWEATHERMAP_KEY'
```

- Run migrations and start the Django server
  
``` 
  python manage.py migrate
  python manage.py runserver
```

- Set up the frontend
  
``` 
  cd weather-app/weather_project/weather-front
  npm install
```

- Start the React server
  
```  
  npm start
```

- Access the application
  Open your browser to **http://localhost:3000** to see the Application in action.

## Usage
Enter a city name in the input field and press Enter or click the Submit button to fetch weather data.
