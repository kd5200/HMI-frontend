import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherInfo = () => {
  const [weather, setWeather] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/weathercon/")
      .then((response) => {
        setWeather(response.data.weather_conditions);
      })
      .catch((error) => {
        setErrorMessage("Failed to fetch weather information");
      });
  }, []);

  return (
    <div>
      <h2>Weather Information</h2>
      {errorMessage ? (
        <p>{errorMessage}</p>
      ) : (
        weather && <p>Current weather: {weather}</p>
      )}
    </div>
  );
};

export default WeatherInfo;
