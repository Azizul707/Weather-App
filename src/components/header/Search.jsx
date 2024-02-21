import { useContext, useState } from "react";
import searchSvg from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/locationData";


const Search = () => {

    const [ searchText, setSearchText ] = useState( "" );
    const { setSelectedLocation } = useContext( LocationContext );


    const handleSubmit = ( e ) => {
        e.preventDefault();
        const fetchedLocation = getLocationByName( searchText );

        setSelectedLocation( { ...fetchedLocation } );


    }
    


    return (
        <form onSubmit={ handleSubmit }>
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input
                    onChange={ ( e ) => setSearchText( e.target.value ) }
                    className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search" placeholder="Search Location" required name="searchText" />
                <button type="submit">
                    <img src={ searchSvg } />
                </button>
            </div>
        </form>
    );
};

export default Search;


