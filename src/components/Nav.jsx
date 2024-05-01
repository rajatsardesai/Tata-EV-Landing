import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <header className="padding-x py-4 2xl:py-8 fixed top-0 z-20 w-full bg-white">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo
                    } alt="Logo" width={130} height={29} />
                </a>
                <ul className={`flex-1 flex lg:justify-center lg:items-center gap-16 ${isActive ? 'max-lg:flex-col max-lg:bg-black max-lg:absolute max-lg:top-[118px] max-lg:left-0 max-lg:w-full max-lg:h-[269px] max-lg:gap-8 max-lg:p-8' : 'max-lg:hidden'}`}>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href} className="font-montserrat leading-normal text-lg max-lg:text-white text-slate-gray cursor-pointer">{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden max-lg:block cursor-pointer" onClick={toggleMenu}>
                    <div className={`w-[25px] h-[3px] bg-black my-1 ${isActive ? 'translate-y-[9px] rotate-45 transition-all' : ''}`}></div>
                    <div className={`w-[25px] h-[3px] bg-black my-1 ${isActive ? 'opacity-0' : ''}`}></div>
                    <div className={`w-[25px] h-[3px] bg-black my-1 ${isActive ? '-translate-y-[5px] -rotate-45 transition-all' : ''}`}></div>
                </div>
            </nav>
        </header>
    )
}

export default Nav