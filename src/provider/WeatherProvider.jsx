import { WeatherContext } from "../context/index.js";
import useGetWeather from "../hook/useGetWeather";
const WeatherProvider = ( { children } ) => {
    const { weatherData, isLoading, isError } = useGetWeather();

    return (
        <WeatherContext.Provider value={ { weatherData, isError, isLoading } }>
            { children }
        </WeatherContext.Provider>
    )
};

export default WeatherProvider;