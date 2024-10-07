import React from 'react';
import { MdMovie, MdFlight, MdDirectionsBus } from 'react-icons/md';
import { GiTicket } from 'react-icons/gi';

const FeatureSection = () => {
  const features = [
    { icon: <MdMovie />, title: 'Movies', link: '/movies' },
    { icon: <GiTicket />, title: 'Shows', link: '/shows' },
    { icon: <MdFlight />, title: 'Flights', link: '/flights' },
    { icon: <MdDirectionsBus />, title: 'Bus', link: '/bus' },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-purple-600 to-purple-400 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white text-purple-700 p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4 hover:bg-gray-100 transition duration-200"
          >
            <div className="text-4xl">{feature.icon}</div>
            <h2 className="text-xl font-bold">{feature.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
