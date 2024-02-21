import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";

const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

const useGetWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const { selectedLocation } = useContext(LocationContext);

  const [isLoading, setIsLoading] = useState({
    state: false,
    message: "",
  });
  const [isError, setIsError] = useState(null);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      setIsLoading({
        ...isLoading,
        state: true,
        message: "Fetching Weather data",
      });
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      );
      if (!response.ok) {
        const errorMessage = `Fetching weather data failed ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();

      const updateWeatherDAta = {
        ...weatherData,
        location: data?.name,
        climate: data.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.main?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      };
      setWeatherData(updateWeatherDAta);
    } catch (err) {
      setIsError(err);
    } finally {
      setIsLoading({
        ...isLoading,
        state: false,
        message: "",
      });
    }
  };
  useEffect(() => {
    setIsLoading({
      state: true,
      message: "Finding Location....",
    });
    if (selectedLocation.latitude && selectedLocation.longitude) {
      fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude);
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      });
    }
  }, [selectedLocation.latitude, selectedLocation.longitude]);

  return {
    weatherData,
    isLoading,
    isError,
  };
};

export default useGetWeather;
