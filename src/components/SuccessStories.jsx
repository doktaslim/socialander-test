import React from "react";

const SuccessStories = () => {
  return (
    <div className="px-5 lg:px-20 py-10 bg-gray-100">
      <h5 className="text-2xl lg:text-3xl border-l-4 border-orange-400 pl-2 mb-4">
        Our Success Stories
      </h5>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:scale-50">
          <img className="w-full" src="assets/lvo.jpg" alt="Ivo" />
          <div className="px-4 py-4 flex flex-row items-stretch">
            <img
              className="self-center h-12 w-12 mr-2"
              src="assets/mastercard-2.svg"
              alt="mastercard"
            />
            <div className="mb-2">
              <p className="text-gray-800 text-sm font-semibold mb-4">
                lvo Mike, <br />
                Executive Vice President, Mastercard
              </p>
              <p className="text-gray-700 text-xs">
                “Through the collaboration with myDevices, we can now provide
                our 200,000 resellers with pre-configured, customizable and
                expandable solutions to solve many problems faced by
                organizations across the globe.”
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="assets/charlene.jpg" alt="Charlene" />
          <div className="px-4 py-4 flex flex-row items-stretch">
            <img
              className="self-center h-12 w-12 mr-2"
              src="assets/microsoft.svg"
              alt="microsoft"
            />
            <div className="mb-2">
              <p className="text-gray-800 text-sm font-semibold mb-4">
                Charlene Mack, <br />
                Principal PM Manager for Azure IoT Microsoft
              </p>
              <p className="text-gray-700 text-xs">
                “myDevices’ technology helps Microsoft Azure IoT users
                accelerate their time to market by reducing the complexity of
                connecting this wide variety of devices.”
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="assets/stacey.png" alt="stacey" />
          <div className="px-4 py-4 flex flex-row items-stretch">
            <img
              className="self-center h-12 w-12 mr-2"
              src="assets/whatsapp-icon.svg"
              alt="whatsapp"
            />
            <div className="mb-2">
              <p className="text-gray-800 text-sm font-semibold mb-4">
                Stacey John, <br />
                IoT Teamlead, WhatsApp
              </p>
              <p className="text-gray-700 text-xs">
                “Organizations are looking for a fast and simple way to get
                their IoT solutions running from prototype development to
                production.”
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src="assets/tom.jpg" alt="tom" />
          <div className="px-4 py-4 flex flex-row items-stretch">
            <img
              className="self-center h-12 w-12 mr-2"
              src="assets/nike-3.svg"
              alt="nike"
            />
            <div className="mb-2">
              <p className="text-gray-800 text-sm font-semibold mb-4">
                Tom Cleverly, <br />
                CTO, Nike
              </p>
              <p className="text-gray-700 text-xs">
                "The myDevices platform provides a user-friendly solution for
                IoT companies that want to connect sensors and data
                intelligently.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
