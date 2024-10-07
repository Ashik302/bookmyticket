import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { MdMovie, MdFlight, MdDirectionsBus } from 'react-icons/md';
import { GiTicket } from 'react-icons/gi';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-purple-700 p-4 text-white flex justify-between items-center">
            {/* Left Section (Logo/Title) */}
            <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold">BookMyTickets</h1>
                <Link href="/movies" className="flex items-center space-x-1">
                    <MdMovie /> <span>Movies</span>
                </Link>
                <Link href="/shows" className="flex items-center space-x-1">
                    <GiTicket /> <span>Shows</span>
                </Link>
                <Link href="/flights" className="flex items-center space-x-1">
                    <MdFlight /> <span>Flights</span>
                </Link>
                <Link href="/bus" className="flex items-center space-x-1">
                    <MdDirectionsBus /> <span>Bus</span>
                </Link>
            </div>

            {/* Right Section (Sign In Button) */}
            <div>
                <button className="bg-white text-purple-700 py-2 px-4 rounded flex items-center space-x-2 hover:bg-gray-200 transition duration-200">
                    <FaUserCircle /> <span>Sign In</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
