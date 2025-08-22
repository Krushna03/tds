import React from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingIcon top="top-36" left="left-6 sm:left-40" image="/angular.png" rotate="rotate-12" />
        <FloatingIcon top="top-80" left="left-4 sm:left-24" image="/js.png" rotate="-rotate-12" />
        <FloatingIcon top="bottom-64" left="left-6 sm:left-48" image="/C++.png" rotate="rotate-20" />
        <FloatingIcon top="top-36" right="right-6 sm:right-36" bg="bg-gray-700 p-2" image="/react.png" rotate="-rotate-12" />
        <FloatingIcon top="top-72" right="right-4 sm:right-32 p-2" image="/nodejs.png" rotate="rotate-12" />
        <FloatingIcon top="bottom-64" right="right-8 sm:right-48" image="/flutter.png" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl w-full text-center space-y-6 sm:space-y-8 pt-20 sm:pt-32">
        <p className="text-blue-600 bg-gray-200 w-[33%] p-[3px] rounded-xl mx-auto text-sm sm:text-lg font-bold animate-slide-up">
          🏆 Digital Product Design Company
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-tight animate-slide-up tracking-wide" style={{ animationDelay: "0.2s" }}>
          Creating Better Solutions <br /> For Businesses
        </h1>

        <p className="text-gray-700 text-base sm:text-lg max-w-2xl font-medium mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
          We are a web and mobile design & development agency. We make websites & apps, create brand identities, and help startups launch successfully.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-5 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Start a Project
          </Button>
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 px-8 py-5 rounded-full text-lg bg-white hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            See Our Products
          </Button>
        </div>
      </div>

      {/* Achievement Section */}
      <div className="relative z-10 w-full px-4 sm:px-6 pt-16 pb-10">
        <h2 className="text-center text-blue-600 font-medium text-lg mb-8">
          Our <span className="text-gray-900 font-semibold">Achievement Gallery</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center max-w-6xl mx-auto">
          {[
            { value: "108+", label: "Projects Delivered" },
            { value: "4million+", label: "Businesses Using Stripe" },
            { value: "10+", label: "Amazing Products" },
            { value: "120+", label: "Countries Worldwide" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:scale-105 transition duration-300">
              <div className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">{item.value}</div>
              <div className="text-gray-600 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Floating Icon Reusable Component
const FloatingIcon = ({ top, left, right, bg, image, rotate = "", rounded = "rounded-xl" }) => (  
  <div className={`absolute ${top} ${left || right} w-10 h-10 sm:w-14 sm:h-14 ${bg} ${rounded} flex items-center justify-center shadow-lg transform ${rotate} hover:cursor-pointer hover:scale-[50]`}>
    <span className="text-white font-bold text-sm sm:text-base">
      <img src={image} alt={image} className="hover:cursor-pointer hover:scale-[5px]" />
    </span>
  </div>
);

export default HeroSection;
