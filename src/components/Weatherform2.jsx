import React, { useState } from "react";

const WeatherForm2 = () => {
  const [weatherCondition, setWeatherCondition] = useState("");
  const [matchingData, setMatchingData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/cities_states_by_weather/?weather_condition=${weatherCondition}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setMatchingData(data.matching_data);
      setErrorMessage("");
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "Invalid weather condition. Please choose from: Thunderstorm, Drizzle, Rain, Snow, Atmosphere, Clear, Clouds"
      ); // Set error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-black to-stone-900">
      <div className="max-w-xl rounded overflow-hidden shadow-lg shadow-pink-600 mb-16 bg-transparent">
        <img
          className="w-full"
          src="data:image/jpeg;base64,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"
          alt="Weather"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">
            Enter Weather Condition Below:
          </div>
          <form
            onSubmit={handleSubmit}
            className="mb-4 flex flex-col justify-center items-center"
          >
            <div className="relative mb-6 mr-2">
              <input
                type="text"
                value={weatherCondition}
                onChange={(e) => setWeatherCondition(e.target.value)}
                className="peer m-0 block w-full rounded border border-solid border-gray-500 bg-transparent bg-clip-padding px-3 py-4 text-black font-normal leading-tight transition duration-200 ease-linear placeholder-gray-500 focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-white focus:outline-none peer-focus:text-black dark:border-pink-600 dark:text-white dark:autofill:shadow-autofill dark:focus:border-primary dark:peer-focus:text-primary dark:hover:bg-gray-800 [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                id="floatingInput"
              />
              <label
                htmlFor="floatingInput"
                className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-white transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-white dark:peer-focus:text-primary"
              >
                Weather Condition
              </label>
            </div>
            <button
              type="submit"
              className="bg-transparent text-white py-2 px-4 rounded hover:bg-gray-600 border border-pink-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div>
        {loading ? ( // Conditionally render loading state
          <p className="text-white font-semibold">Loading...</p>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-2 dark:text-white">
              Cities experiencing the condition given:
            </h2>
            {errorMessage && (
              <p className="text-white font-semibold">{errorMessage}</p>
            )}
            <ul className="w-96 text-surface dark:text-white">
              {matchingData.map((item, index) => (
                <li
                  key={index}
                  className="mb-4"
                  class="w-full border-b-2 border-neutral-100 py-4 dark:border-white"
                >
                  <div className="flex">
                    <div>
                      <span className="font-semibold"> {item.City}</span>
                      <span className="font-semibold">, {item.State}</span>
                      <p className="font-semibold">
                        Temperature: {item.Temperature_Fahrenheit} &deg;F
                      </p>
                      <p className="font-semibold">
                        Wind Speed: {item.Wind_Speed} mph
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherForm2;
