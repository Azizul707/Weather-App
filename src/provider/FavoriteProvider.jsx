
import { FavoriteContext } from "../context";
import { useLocalStorage } from "../hook";

const FavoriteProvider = ( { children } ) => {

    const [ favorites, setFavorites ] = useLocalStorage( "favorite", [] );

    const addToFavorite = ( latitude, longitude, location ) => {
        setFavorites(
            [ ...favorites,
            {
                latitude: latitude,
                longitude: longitude,
                location: location
            }
            ] )
    };

    const removeFromFavorites = ( location ) => {
        const restFavorite = favorites.filter( fav => fav.location !== location );

        setFavorites( restFavorite )
    }

    return (
        <FavoriteContext.Provider value={ { addToFavorite, removeFromFavorites, favorites } }>
            { children }

        </FavoriteContext.Provider>
    )
};

export default FavoriteProvider;