import { useContext, useEffect, useState } from 'react';
import RedHeart from "../../assets/heart-red.svg";
import heart from '../../assets/heart.svg';
import { FavoriteContext, WeatherContext } from '../../context';

const AddToFav = () => {
    const [ isFavorite, toggleFavorite ] = useState( false );

    const { weatherData } = useContext( WeatherContext );

    const { longitude, latitude, location } = weatherData;


    const { addToFavorite, removeFromFavorites, favorites } = useContext( FavoriteContext );


    useEffect( () => {
        const found = favorites.find( fav => fav.location === location );
        toggleFavorite( found );
    }, [] )
    const handleFavorite = () => {
        const found = favorites.find( fav => fav.location === location );
        if ( !found ) {
            addToFavorite( latitude, longitude, location );
        } else {
            removeFromFavorites( location );
        }
        toggleFavorite( !isFavorite );
    }
    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button onClick={ handleFavorite } className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D] cursor-pointer">
                    <span>Add to Favourite</span>
                    <img src={ isFavorite ? RedHeart : heart } alt="" />
                </button>

            </div>
        </div>
    );
};

export default AddToFav;