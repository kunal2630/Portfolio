import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = ["About", "Resume", "Projects", "Contact"];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-[#282829] px-8 py-4 rounded-bl-3xl rounded-tr-3xl shadow-md" >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Hamburger icon */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {isOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
                    </button>
                </div>

                {/* Nav items (desktop) */}
                <ul className="hidden md:flex space-x-7 text-white text-lg font-medium">
                    {navItems.map((item) => (
                        <li key={item}>
                            <NavLink
                                to={`/portfolio/${item.toLowerCase()}`}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-[#FEC260] font-semibold"
                                        : "text-gray-300 hover:text-[#FEC260] transition duration-300"
                                }
                            >
                                {item}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Nav items (mobile) */}
            {
                isOpen && (
                    <div className="md:hidden mt-4">
                        <ul className="flex flex-col space-y-4 text-white text-lg font-medium">
                            {navItems.map((item) => (
                                <li key={item}>
                                    <NavLink
                                        to={`/portfolio/${item.toLowerCase()}`}
                                        className={({ isActive }) =>
                                            isActive
                                                ? "text-[#FEC260] font-semibold"
                                                : "text-gray-300 hover:text-[#FEC260] transition duration-300"
                                        }
                                        onClick={() => setIsOpen(false)} // close on click
                                    >
                                        {item}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </nav >
    );
};

export default Navbar;
