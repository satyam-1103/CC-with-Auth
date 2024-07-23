import React from 'react';
import Image from 'next/image';

const Data = [
  { title: "Events", description: "Unlock unforgettable experiences. Explore our upcoming events now!", href: "/events" },
  { title: "Notes", description: "Capture brilliance. Dive into our treasure trove of insightful notes!", href: "/notes" },
  { title: "Internships", description: "Your career journey starts here. Discover exciting internship opportunities today!", href: "/opportunities" },
  { title: "Community", description: "Connect, collaborate, and thrive. Join our vibrant community and be part of something great!", href: "/Login" },
];

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 animate-fade-in-down">
              COLLEGE CONNECT
            </h1>
            <p className="text-xl sm:text-2xl text-purple-200 mb-8 animate-fade-in-up">
              Guiding your journey to success through curated notes, exciting internships, and valuable events. Elevate your path with us.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                Join Community
              </button>
              <a href='/events'><button className="bg-transparent border-2 border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-purple-900 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out">
                Explore Events
              </button></a>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="w-full h-64 sm:h-80 lg:h-96 relative animate-float">
              <Image
                src="/main.png"
                alt="College Connect Hero"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-pink-400 rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Data.map((item, index) => (
            <a href={item.href} key={index}><div className="bg-white bg-opacity-10 p-6 rounded-lg text-center hover:bg-opacity-20 transition duration-300 ease-in-out h-40">
              <h3 className="text-xl font-bold text-white mb-2">{item.title}➔</h3>
              <p className="text-purple-200">{item.description}</p>
            </div> </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;