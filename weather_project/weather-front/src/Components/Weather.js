import React from "react";

const Weather = ({ weather }) => {
  return (
    <div>
      {weather ? (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {Math.round(weather?.main.temp)} °C</p>
          <p>Description: {weather?.weather[0].description}</p>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Weather;
