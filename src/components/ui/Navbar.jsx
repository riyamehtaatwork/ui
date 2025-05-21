import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      {" "}
      <nav className="bg-gray-800 text-white p-4 flex space-x-4 justify-center font-semibold">
        <Link to="/" className="hover:underline">
          All
        </Link>
        <Link to="/bento-grid" className="hover:underline">
          Bento Grid
        </Link>
        <Link to="/vertical-timeline" className="hover:underline">
          Vertical Timeline
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
