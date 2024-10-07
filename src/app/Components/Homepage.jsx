"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import { FaUser } from "react-icons/fa";
import { GiFilmSpool, GiTicket } from "react-icons/gi";
import { MdAirplanemodeActive, MdDirectionsBus } from "react-icons/md";
import FeatureCarousel from "./SliderSection";
const HomePage = () => {
    const [animationData, setAnimationData] = useState(null);

    // Fetch Lottie animation data
    useEffect(() => {
        const fetchAnimation = async () => {
            try {
                const response = await axios.get(
                    "https://lottie.host/b790bbb4-6b35-411c-a10b-ebd0eee7f335/tMhGkYLspE.json"
                );
                setAnimationData(response.data);
            } catch (error) {
                console.error("Error fetching animation data", error);
            }
        };
        fetchAnimation();
    }, []);

    return (
        <div className="homepage bg-gray-50">
            {/* Header */}
            <header className="flex justify-between items-center p-6 bg-gradient-to-r from-purple-800 to-purple-600 shadow-lg">
                {/* Logo */}
                <div className="text-3xl font-bold text-white tracking-widest font-poppins">
                    BookMyTicket
                </div>

                {/* Sign-in button */}
                <button className="flex items-center text-white font-semibold bg-purple-700 hover:bg-purple-800 transition duration-300 px-4 py-2 rounded-lg shadow-md">
                    <FaUser className="mr-2" /> Sign In
                </button>
            </header>

            {/* Navbar */}
            <nav className="bg-white shadow-lg sticky top-0 z-10">
                <ul className="flex space-x-10 justify-center py-4 text-lg font-semibold text-purple-700">
                    <li className="flex items-center transition duration-300 hover:text-purple-900 hover:scale-105">
                        <GiFilmSpool className="mr-2 text-2xl" />
                        Movies
                    </li>
                    <li className="flex items-center transition duration-300 hover:text-purple-900 hover:scale-105">
                        <GiTicket className="mr-2 text-2xl" />
                        Shows
                    </li>
                    <li className="flex items-center transition duration-300 hover:text-purple-900 hover:scale-105">
                        <MdAirplanemodeActive className="mr-2 text-2xl" />
                        Flights
                    </li>
                    <li className="flex items-center transition duration-300 hover:text-purple-900 hover:scale-105">
                        <MdDirectionsBus className="mr-2 text-2xl" />
                        Bus
                    </li>
                </ul>
            </nav>

            {/* Tagline and Animation Section */}
            <div className="flex justify-between items-center w-[85%] m-auto px-10 py-20">
                {/* Left: Tagline and Buttons */}
                <div className="w-1/2">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6 font-poppins">
                        Your Ultimate Ticketing Experience
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Book your favorite events or host your own. Enjoy a seamless experience!
                    </p>
                    <div className="space-x-4">
                        <button className="bg-gradient-to-r from-purple-700 to-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 hover:from-purple-600 hover:to-purple-500">
                            Book Now
                        </button>
                        <button className="border-2 border-purple-700 text-purple-700 font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 hover:bg-purple-700 hover:text-white">
                            Host Ticket
                        </button>
                    </div>
                </div>

               <FeatureCarousel />
            </div>

            {/* Features Section */}
            <section className="bg-white py-20">
                <h2 className="text-4xl font-bold text-center text-purple-600 mb-12">
                    Explore Our Features
                </h2>
                <div className="flex justify-around items-center px-10">
                    <div className="feature-card bg-purple-100 p-6 rounded-lg shadow-md text-center w-1/4">
                        <GiFilmSpool className="text-6xl text-purple-600 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800">Movies</h3>
                        <p className="text-gray-600">Catch the latest blockbusters.</p>
                    </div>
                    <div className="feature-card bg-purple-100 p-6 rounded-lg shadow-md text-center w-1/4">
                        <GiTicket className="text-6xl text-purple-600 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800">Shows</h3>
                        <p className="text-gray-600">Enjoy live performances.</p>
                    </div>
                    <div className="feature-card bg-purple-100 p-6 rounded-lg shadow-md text-center w-1/4">
                        <MdAirplanemodeActive className="text-6xl text-purple-600 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800">Flights</h3>
                        <p className="text-gray-600">Book your travel seamlessly.</p>
                    </div>
                    <div className="feature-card bg-purple-100 p-6 rounded-lg shadow-md text-center w-1/4">
                        <MdDirectionsBus className="text-6xl text-purple-600 mb-4" />
                        <h3 className="text-2xl font-bold text-gray-800">Bus</h3>
                        <p className="text-gray-600">Convenient bus services.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
