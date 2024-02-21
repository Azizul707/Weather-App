import { useContext } from "react";
import HazeIcon from "../../assets/haze.svg";
import CloudIcon from "../../assets/icons/cloud.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import RainyIcon from "../../assets/rainy.svg";
import SunnyIcon from "../../assets/sun.svg";
import ThunderIcon from "../../assets/thunder.svg";

import Pin from '../../assets/pin.svg';
import { WeatherContext } from "../../context";
import { getFormateDate } from "../../utils/date.utils";

const WeatherHeadline = () => {
    const { weatherData } = useContext( WeatherContext )
    const { temperature, time, location, climate } = weatherData;
    const getWeatherIcon = ( climate ) => {
        switch ( climate ) {
            case "Rain":
                return RainyIcon

            case "Clouds":
                return CloudIcon

            case "Clear":
                return SunnyIcon

            case "Snow":
                return SnowIcon

            case "Thunder":
                return ThunderIcon

            case "Fog":
                return HazeIcon

            case "Haze":
                return HazeIcon

            case "Mist":
                return HazeIcon


            default:
                return SunnyIcon;
        }
    }
    return (
        <div>
            <div className="max-md:flex items-center justify-between md:-mt-10">
                <img src={ getWeatherIcon( climate ) } alt="cloud" />
                <div className="max-md:flex items-center max-md:space-x-4">
                    <h1 className="text-[30px] lg:text-[50px] xl:text-[70px] leading-none md:mb-4">{ Math.round( temperature ) }°</h1>
                    <div className="flex items-center space-x-4 md:mb-4">
                        <img src={ Pin } />
                        <h2 className="text-2xl lg:text-[40px] leading-10">{ location }</h2>
                    </div>
                </div>
            </div>
            <p className="text-sm lg:text-lg">{ getFormateDate( time, "time", false ) }-{ getFormateDate( time, "date", false ) }</p>
        </div>
    );
};

export default WeatherHeadline;