import React from "react";
import Carousel from "react-elastic-carousel";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
]

const TrustedBy = () => {
  return (
    <div className="bg-yellow-100 px-5 lg:px-20 py-16">
      <h5 className="text-2xl lg:text-3xl border-l-4 border-orange-400 text-gray-600 pl-2 mb-4">
        Trusted By
      </h5>
      <Carousel enableAutoPlay itemsToShow={4} transitionMs={3000} breakPoints={breakPoints}>
        <div className="mx-auto lg:mx-0">
          <img className="w-32 h-32" src="assets/adidas-4.svg" alt="adidas" />
        </div>
        <div className="">
          <img className="w-32 h-32" src="assets/apple-black.svg" alt="apple" />
        </div>
        <div className="">
          <img className="w-32 h-32" src="assets/bmw.svg" alt="bmw" />
        </div>
        <div className="">
          <img className="w-32 h-32" src="assets/mastercard-2.svg" alt="mastercard" />
        </div>
        <div className="">
          <img className="w-32 h-32" src="assets/microsoft.svg" alt="microsoft" />
        </div>
        <div className="">
          <img className="w-32 h-32" src="assets/nike-3.svg" alt="nike" />
        </div>
        <div className="">
          <img className="w-32 h-32" src="assets/whatsapp-icon.svg" alt="whatsapp" />
        </div>
        <div className="">
          <img className="w-32 h-32" src="assets/xbox-one.svg" alt="xbox-one" />
        </div>
      </Carousel>
    </div>
  );
};

export default TrustedBy;
