import { useContext, useEffect, useState } from "react";
import Header from "./components/header/Header";
import WeatherDashboard from "./components/weather/WeatherDashboard";
import { WeatherContext } from "./context";

import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import CloudSkyImage from "./assets/backgrounds/few-clouds.jpg";
import MistSkyImage from "./assets/backgrounds/mist.jpeg";
import RainySkyImage from "./assets/backgrounds/rainy-day.jpg";
import ScattedCloudSkyImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowSkyImage from "./assets/backgrounds/snow.jpg";
import SunnySkyImage from "./assets/backgrounds/sunny.jpg";
import ThunderSkyImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterSkyImage from "./assets/backgrounds/winter.jpg";

const Page = () => {
    const { weatherData, isLoading } = useContext( WeatherContext );

    const [ climateImage, setClimateImage ] = useState( "" );

    const handleBackgroundImage = ( climate ) => {
        switch ( climate ) {
            case "Rainy":

                return RainySkyImage;
            case "Clouds":

                return ScattedCloudSkyImage;
            case "Clear":

                return ClearSkyImage;
            case "Snow":

                return SnowSkyImage;
            case "Thunder":

                return ThunderSkyImage;
            case "Fog":

                return WinterSkyImage;
            case "Haze":

                return CloudSkyImage;
            case "Mist":

                return MistSkyImage;

            default:
                return SunnySkyImage;
        }
    };
    useEffect( () => {
        const bgImage = handleBackgroundImage( weatherData.climate );
        setClimateImage( bgImage );
    }, [ weatherData.climate ] )
    return (
        <>
            {
                isLoading.state ? ( <div>
                    <p>{ isLoading.message }</p>
                </div> ) : (
                    <div
                        style={ { backgroundImage: `url('${ climateImage }')` } }
                        className="grid place-items-center h-screen bg-no-repeat bg-cover">
                        <Header />
                        <main>
                            <section>
                                <WeatherDashboard />
                            </section>
                        </main>
                    </div>
                )
            }
        </>
    );
};

export default Page;