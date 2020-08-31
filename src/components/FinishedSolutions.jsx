import React from "react";
import Carousel from 'react-elastic-carousel'

const FinishedSolutions = () => {
  return (
    <div className="bg-gray-100 px-5 lg:px-20 py-16">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 px-4 animate__animated animate__bounceInLeft">
          <img
            className="mb-4"
            src="https://ro9wo3uukyx37urrx3g053fo-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/iot-in-box.svg"
            alt=""
          />
          <h5 className="mb-1 text-2xl">Finished IoT Solutions</h5>
          <p className="mb-2 text-gray-600 text-lg">Ready to Sell</p>
          <p className="mb-4 text-base">
            Select from a large variety of pre-packaged end-to-end IoT solutions
            that include software, hardware, and connectivity. You’ll have
            direct access to everything you need to start selling right away,
            from marketing materials to proven sales tools, plus dedicated
            support that will guide you every step of the way.
          </p>
          <button className="rounded-sm bg-orange-600 text-white font-bold px-10 py-2 lg:px-6 lg:py-3 hover:bg-orange-500">
            More pre-packaged solutions
          </button>
        </div>
        <div className="w-full lg:w-1/2 mt-20 lg:mt-0">
          <Carousel enableAutoPlay transitionMs={3000}>
            <div className="w-full">
              <img src="assets/Waste-Bin.png" alt="" />
            </div>
            <div className="">
              <img src="assets/Temperature-Monitoring.png" alt="" />
            </div>
            <div className="">
              <img src="assets/Rodent-Trap.png" alt="" />
            </div>
            <div className="">
              <img src="assets/Panic-Button.png" alt="" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default FinishedSolutions;
