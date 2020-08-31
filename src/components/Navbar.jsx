import React, { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav
        className="relative w-full flex flex-wrap items-center justify-between px-2 py-2 navbar-expand-lg"
        style={{ backgroundColor: "#131C2D" }}
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <a
              className="leading-relaxed -ml-3 lg:ml-5 inline-block mr-4 whitespace-no-wrap uppercase text-white"
              href="#paab"
            >
              <img src="https://trim.ng/rAiWG" alt="my-devices" />
            </a>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="cursor-pointer leading-none px-1 py-1 block lg:hidden outline-none focus:outline-none"
              type="button"
            >
              <i className="fas fa-bars text-3xl text-white"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none ml-0 lg:ml-auto mt-4 lg:mt-0">
              <li className="nav-item my-2 lg:my-0">
                <a
                  className="lg:mx-4 flex item uppercase font-bold leading-snug text-white hover:text-orange-500"
                  href="#pablo"
                >
                  CAPABILITIES
                </a>
              </li>
              <li className="nav-item my-2 lg:my-0">
                <a
                  className="lg:mx-4 flex item uppercase font-bold leading-snug text-white hover:text-orange-500"
                  href="#pablo"
                >
                  SOLUTIONS & DEVICES
                </a>
              </li>
              <li className="nav-item my-2 lg:my-0">
                <a
                  className="flex items-center uppercase lg:mx-4 font-bold leading-snug text-white hover:text-orange-500"
                  href="#pablo"
                >
                  INTEGRATIONS
                </a>
              </li>
              <li className="nav-item my-2 lg:my-0">
                <a
                  className="flex items-center uppercase lg:mx-4 font-bold leading-snug text-white hover:text-orange-500"
                  href="#pablo"
                >
                  SUCCESS
                </a>
              </li>
              <li className="nav-item my-2 lg:my-0">
                <a
                  className="flex items-center uppercase lg:mx-4 font-bold leading-snug text-white hover:text-orange-500"
                  href="#pablo"
                >
                  PARTNERS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
