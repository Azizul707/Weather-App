import { useContext } from "react"
import Cloudy from "../../assets/icons/cloud.svg"
import Humidity from "../../assets/icons/humidity.svg"
import TempMax from "../../assets/icons/temp-max.svg"
import TempMin from "../../assets/icons/temp-min.svg"
import Wind from "../../assets/icons/wind.svg"
import { WeatherContext } from "../../context"
const WeatherCondition = () => {

    const { weatherData } = useContext( WeatherContext );
    const { climate, maxTemperature, minTemperature, humidity, cloudPercentage, wind } = weatherData;

    return (
        <div>
            <p className="text-sm lg:text-lg font-bold uppercase mb-8">The Weather is <u className="text-red-700">{ climate }</u></p>
            <ul className="space-y-6 lg:space-y-6">
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp max</span>
                    <div className="inline-flex space-x-4">
                        <p>{ maxTemperature }°</p>
                        <img src={ TempMax } alt="temp-max" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Temp min</span>
                    <div className="inline-flex space-x-4">
                        <p>{ minTemperature }°</p>
                        <img src={ TempMin } alt="temp-min" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Humadity</span>
                    <div className="inline-flex space-x-4">
                        <p>{ humidity }%</p>
                        <img src={ Humidity } alt="humidity" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Cloudy</span>
                    <div className="inline-flex space-x-4">
                        <p>{ cloudPercentage }%</p>
                        <img src={ Cloudy } alt="cloudy" />
                    </div>
                </li>
                <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
                    <span>Wind</span>
                    <div className="inline-flex space-x-4">
                        <p>{ wind }km/h</p>
                        <img src={ Wind } alt="wind" />
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default WeatherCondition;