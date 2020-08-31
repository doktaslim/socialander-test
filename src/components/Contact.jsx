import React from "react";

const Contact = () => {
  return (
    <div
      className="py-12"
      style={{
        backgroundImage: `url('assets/green-abstract.jpg')`,
        height: "auto",
      }}
    >
      <div className="text-center animate__animated animate__bounceInLeft">
        <h5 className="text-3xl font-semibold mb-2 text-white">
          We Help You Build Something Awesome.
        </h5>
        <button className="rounded-sm bg-orange-600 text-white font-bold px-10 py-2 lg:px-6 lg:py-3 hover:bg-opacity-75">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Contact;
