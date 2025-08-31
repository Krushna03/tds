import { Button } from "./ui/button";
import { AnimatedSection } from "./AnimatedSection";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-blue-100 via-orange-100 to-blue-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Floating Icons */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <FloatingIcon top="top-36" left="left-6 sm:left-40" image="/angular.png" rotate="rotate-12" />
        <FloatingIcon top="top-96" left="left-4 sm:left-24" image="/js.png" rotate="-rotate-12" />
        <FloatingIcon top="bottom-64" left="left-6 sm:left-48" image="/C++.png" rotate="rotate-20" />
        <FloatingIcon top="top-36" right="right-6 sm:right-36" bg="bg-gray-700 p-2" image="/react.png" rotate="-rotate-12" />
        <FloatingIcon top="top-80" right="right-4 sm:right-32 p-2" image="/nodejs.png" rotate="rotate-12" />
        <FloatingIcon top="bottom-64" right="right-8 sm:right-48" image="/flutter.png" />
      </div> */}

      {/* Hero Content */}
      <AnimatedSection>
        <div className="relative z-10 max-w-5xl w-full text-center pt-20 sm:pt-[150px]">
          {/* Badge */}
          <p className="inline-block bg-gradient-to-r from-blue-500/10 to-blue-600/10 text-gray-700 px-5 py-2 rounded-full text-sm sm:text-[15px] font-semibold tracking-wide shadow-sm animate-slide-up">
            Digital Product Development Company
          </p>

          {/* Heading */}
          <h1
            className="font-dmserif text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight tracking-wider animate-slide-up pt-4"
            style={{ animationDelay: "0.2s" }}
          >
            Creating Better Solutions <br /> For Businesses{" "}
          </h1>


          {/* Subtext */}
          <p className="text-roboto text-gray-600 text-base sm:text-lg max-w-3xl mx-auto animate-slide-up font-medium pt-5" style={{ animationDelay: "0.4s" }}>
            We are a web and mobile design & development agency that builds more than just websites and apps. We build trust. By crafting powerful digital experience and brand identities, we help startups grow, while making our customers our true brand ambassadors.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-7">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-blue-400 font-roboto">
              Start Your Project
            </Button>
            <Button
              variant="outline"
              className="border font-roboto border-gray-300 text-gray-700 px-7 py-6 rounded-full text-lg font-medium bg-white hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-md focus:ring-2 focus:ring-gray-300"
            >
              Explore Solutions
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* Achievement Section */}
      <AnimatedSection>
        <div className="relative z-10 w-full px-4 sm:px-6 pt-14 pb-14">
          <h2 className="text-center text-blue-800 font-bold text-2xl mb-8">
            Our <span className="text-gray-900 font-bold">Achievement Gallery</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 text-center max-w-6xl mx-auto">
            {[
              { value: "108+", label: "Projects Delivered" },
              { value: "4M+", label: "Businesses Using Stripe" },
              { value: "10+", label: "Amazing Products" },
              { value: "120+", label: "Countries Worldwide" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/40 backdrop-blur-md rounded-2xl p-6 shadow-md hover:scale-105 transition duration-300 border border-gray-100">
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 font-roboto">{item.value}</div>
                <div className="text-gray-800 font-medium text-sm sm:text-base">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

// Floating Icon Component
// const FloatingIcon = ({ top, left, right, bg, image, rotate = "", rounded = "rounded-xl" }) => (  
//   <div
//     className={`absolute ${top} ${left || right} w-10 h-10 sm:w-11 sm:h-11 ${bg} ${rounded} flex items-center justify-center transform ${rotate} transition-transform duration-300 hover:scale-125`}
//   >
//     <img src={image} alt="tech-icon" className="w-full h-full object-contain" />
//   </div>
// );

export default HeroSection;
