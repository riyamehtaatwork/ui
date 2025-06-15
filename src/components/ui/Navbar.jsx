import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/ui/favicon.png";

const navItems = [
  { path: "/information-sections", label: "Sections" },
  { path: "/bento-grid", label: "Bento Grid" },
  { path: "/vertical-timeline", label: "Vertical Timeline" },
  { path: "/navbars", label: "Navbars" },
  { path: "/headers", label: "Headers" },
  { path: "/cards", label: "Feature Cards" },
  { path: "/buttons", label: "Buttons" },
];

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex justify-between font-semibold px-20">
        <Link to="/">
          <div className="flex space-x-3 items-center">
            <img src={logo} alt="logo" title="My UI Logo" className="h-10" />
            <span className="text-3xl">My UI</span>
          </div>
        </Link>
        <div className="flex space-x-4 items-center text-xl">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className="hover:underline">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
