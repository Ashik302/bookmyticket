"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import bus from '/public/bus.jpeg';
import flight from '/public/flight.jpg';
import movie from '/public/movie.jpg';
import shows from '/public/shows.jpg';

// Define your image data
const images = [
  { title: "Movies Ticketing", src: movie },
  { title: "Flights Ticketing", src: flight },
  { title: "Bus Ticketing", src: bus },
  { title: "Shows Ticketing", src: shows },
];

const FeatureCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="carousel-container relative w-full max-w-xl">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          layout="responsive"
          width={1920} // Adjust these values based on your image aspect ratio
          height={1080} // This ensures the image will retain its aspect ratio
          className="rounded-lg" // Optional styling for rounded corners
        />
        {/* Text Overlay */}
        <h2 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center font-bold text-3xl text-yellow-400 shadow-lg rounded-md" style={{ textShadow: '2px 2px 4px black', whiteSpace: 'nowrap' }}>
          {images[currentIndex].title}
        </h2>
      </div>
    </div>
  );
};

export default FeatureCarousel;
