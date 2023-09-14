"use client"

import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    // Define the API endpoint URL
    const apiUrl = "/api/weather"; // Change the query parameter as needed

    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setWeatherData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!weatherData) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl font-bold mb-4">Weather Information</h1>
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Weather Information</h1>
      <p className="mb-2">
        Location: {weatherData.location.name}, {weatherData.location.country}
      </p>
      <p className="mb-2">
        Temperature: {weatherData.current.temp_c}°C /{" "}
        {weatherData.current.temp_f}°F
      </p>
      <p>
        Humidity: {weatherData.current.humidity}%
      </p>
      {/* Add more data fields as needed */}
    </div>
  );
};

export default Weather;
