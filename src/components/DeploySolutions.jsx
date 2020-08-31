import React from "react";

const DeploySolutions = () => {
  return (
    <div className="bg-blue-100 px-5 lg:px-20 py-16">
      <div className="flex flex-col lg:flex-row items-stretch">
        <div className="w-full lg:w-1/2 animate__animated animate__bounceInLeft">
          <img className="w-full" src="assets/iot-2.jpg" alt="" />
        </div>

        <div className="w-full lg:w-1/2 px-0 mt-6 lg:mt-0 lg:px-8 self-center animate__animated animate__bounceInRight">
          <h5 className="text-2xl text-gray-700 font-semibold mb-3">Deploy IoT Solutions</h5>
          <p className="text-lg text-gray-700 mb-4">
            Become a platform partner and receive full support from myDevices' team
            including co-selling, marketing tools, and dedicated support.
            <br />
            <br />
            <span className="text-gray-700 font-semibold mb-2 text-xl">LICENSE THE PLATFORM</span>
            Deploy finished IoT solutions using your brand or ours.
            Turnkey solutions available or customize with endless integrations.
            You bill, market, and support your customers.
          </p>

          <button className="rounded-sm bg-orange-600 text-white font-bold px-10 py-2 lg:px-6 lg:py-3 hover:bg-orange-500">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeploySolutions;
