

import { useState } from "react";
import heart from "../../assets/heart.svg";
import Logo from "./Logo";
import Modal from "./Modal";
import Search from "./Search";
const Header = () => {
    const [ showModal, setShowModal ] = useState( false );



    return (
        <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
            <nav className="container flex items-center justify-between py-6">
                <Logo />

                <div className="flex items-center gap-4 relative">
                    <Search />
                    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
                        <img src={ heart } alt="" />
                        <span className="text-white" onClick={ () => setShowModal( !showModal ) }>Favourite Locations</span>
                    </div>

                    {/* <!-- Modal --> */ }
                    {
                        showModal && <Modal />
                    }

                </div>
            </nav>
        </header>
    );
};

export default Header;