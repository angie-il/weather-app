import React, { useState } from "react";

const WeatherForm = ({ getWeather }) => {
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather(location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={location}
        onChange={handleChange}
        placeholder='Enter a city'
      />
    </form>
  );
};

export default WeatherForm;
