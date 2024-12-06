import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import MainWeatherCard from "../components/mainweathercard";
import FiveDayForecast from "../components/fiveday";
import TodayHighlights from "../components/todayhighlights";

import axios from "axios";

const Place = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Delhi"); // Default city is set to London
  const [airQualityData, setAirQualityData] = useState(null);
  const [fiveDayForecast, setFiveDayForecast] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 992);

  useEffect(() => {
    fetchWeatherData(city);
  }, [city]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 992);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchAirQualityData = (lat, lon) => {
    const API_KEY = "f49653e026f6bd0c4262ce24fd7466ae"; // Replace with your OpenWeatherMap API key
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      .then((response) => {
        setAirQualityData(response.data.list[0]); // Set the first item in the list as air quality data
      })
      .catch((error) =>
        console.error("Error fetching the air quality data:", error)
      );
  };

  const fetchWeatherData = (city) => {
    const API_KEY = "f49653e026f6bd0c4262ce24fd7466ae"; // Replace with your OpenWeatherMap API key
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        console.log(JSON.stringify(data));
        fetchAirQualityData(data.coord.lat, data.coord.lon);
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
          )
          .then((response) => {
            setFiveDayForecast(response.data);
          })
          .catch((error) =>
            console.error("Error fetching the 5-day forecast data:", error)
          );
      })
      .catch((error) =>
        console.error("Error fetching the weather data:", error)
      );
  };

  const handleSearch = (searchedCity) => {
    setCity(searchedCity);
  };

  return (
    <div style={{ marginLeft: "60px", marginRight: "60px" }}>
      <Navbar onSearch={handleSearch} />
      {weatherData && airQualityData && (
        <div
          style={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            alignItems: isSmallScreen ? "center" : "flex-start",
            justifyContent: isSmallScreen ? "center" : "flex-start",
            padding: "30px",
            gap: "20px",
          }}
        >
          <div style={{ flex: "1", marginRight: isSmallScreen ? "0" : "10px" }}>
            <MainWeatherCard weatherData={weatherData} />
            <div style={{ marginLeft: isSmallScreen ? "0" : "30px" }}>
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "20px",
                  marginTop: "20px",
                  color: "black",
                }}
              >
                Next 5 hour's Forecast
              </p>
            </div>
            {fiveDayForecast && (
              <FiveDayForecast forecastData={fiveDayForecast} />
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: "0.5",
              gap: "20px",
            }}
          >
            <TodayHighlights
              weatherData={weatherData}
              airQualityData={airQualityData}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Place;
