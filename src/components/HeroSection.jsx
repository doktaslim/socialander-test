import React from "react";

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url('assets/about.jpg')`, height: "700px" }}
      className="pt-32"
    >
      <div className="text-white px-5 lg:px-20 text-center lg:text-left lg:w-2/3 animate__animated animate__bounceInRight">
        <h1 className="text-4xl lg:text-6xl font-bold mb-2">
          One Platform. Infinite Plug-And-Play IOT Solutions.
        </h1>
        <h5 className="text-2xl lg:text-2xl font-semibold mb-4">
          Empowering System Integrators, MSPs, VARs, ISVs and Enterprise
          customers to quickly deploy commercial-ready IoT solutions.
        </h5>
        <button className="hover:bg-orange-600 rounded-sm bg-orange-700 text-white font-bold px-6 py-3 lg:px-8 lg:py-3">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
