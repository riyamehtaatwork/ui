import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/ui/favicon.png";
const Navbar = () => {
  return (
    <div>
      {" "}
      <nav className="bg-gray-800 text-white p-4 flex justify-between font-semibold px-20">
        <Link to="/">
          <div className="flex space-x-3 items-center ">
            <img src={logo} alt="logo" title="My UI Logo" className="h-10" />
            <span className="text-3xl">My UI</span>
          </div>
        </Link>
        <div className="flex  space-x-4 items-center text-xl ">
          <Link to="/information-sections" className="hover:underline">
            Sections
          </Link>
          <Link to="/bento-grid" className="hover:underline">
            Bento Grid
          </Link>
          <Link to="/vertical-timeline" className="hover:underline">
            Vertical Timeline
          </Link>
          <Link to="/navbars" className="hover:underline">
            Navbars
          </Link>
          <Link to="/headers" className="hover:underline">
            Headers
          </Link>
          <Link to="/cards" className="hover:underline">
            Feature Cards
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
