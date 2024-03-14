import React, { useState } from "react";
import axios from "axios";

const WeatherForm = () => {
  const [weatherCondition, setWeatherCondition] = useState("");
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/cities_states_by_weather/?weather_condition=${weatherCondition}`
      );
      console.log("response", response);
      //   setCities(response.data.cities);
      //   setStates(response.data.states);
      setError("");
    } catch (error) {
      setCities([]);
      setStates([]);
      setError("Failed to fetch cities and states.");
    }
  };

  return (
    <div>
      <h2>Weather Condition Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Weather Condition:
          <input
            type="text"
            value={weatherCondition}
            onChange={(e) => setWeatherCondition(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
      {cities.length > 0 && (
        <div>
          <h3>Matching Cities:</h3>
          <ul>
            {cities.map((city, index) => (
              <li key={index}>{city}</li>
            ))}
          </ul>
        </div>
      )}
      {states.length > 0 && (
        <div>
          <h3>Matching States:</h3>
          <ul>
            {states.map((state, index) => (
              <li key={index}>{state}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeatherForm;
