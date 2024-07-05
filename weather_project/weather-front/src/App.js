import React, { useState } from "react";
import axios from "axios";
import Weather from "./Components/Weather";
import WeatherForm from "./Components/WeatherForm";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async (location) => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/weather/?location=${location}`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <WeatherForm getWeather={getWeather} />
        <Weather weather={weatherData} />
      </header>
    </div>
  );
}

export default App;
