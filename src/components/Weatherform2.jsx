import React, { useState } from "react";

const WeatherForm2 = () => {
  const [weatherCondition, setWeatherCondition] = useState("");
  const [matchingData, setMatchingData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/cities_states_by_weather/?weather_condition=${weatherCondition}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setMatchingData(data.matching_data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Weather Condition:
          <input
            type="text"
            value={weatherCondition}
            onChange={(e) => setWeatherCondition(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Matching Data:</h2>
        <ul>
          {matchingData.map((item, index) => (
            <li key={index}>
              City: {item.City}, State: {item.State}, Temperature (Fahrenheit):{" "}
              {item.Temperature_Fahrenheit}, Wind Speed: {item.Wind_Speed}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WeatherForm2;
