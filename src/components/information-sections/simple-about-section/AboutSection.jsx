import React from "react";
import aboutus from "../assets/about.png";
import List from "./List";
import { Button } from "./Button";
import Heading from "./Heading";

const AboutSection = () => {
  const listItems = [
    "Best Fan Motors",
    "Quality Cooler Parts",
    "Hardware Accessories",
    "Global Delivery",
  ];

  return (
    <div className="my-20 px-4 md:px-12 lg:px-32" id="about">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <img
          src={aboutus}
          alt="people in factory"
          className="w-full max-w-md h-auto lg:h-[30rem] rounded-xl object-cover"
        />

        <div className="flex flex-col justify-center items-center text-left w-full">
          <Heading
            title="About Indotech Engineering"
            text="Established in India, Indotech Engineering Products has grown to become a leading manufacturer of industrial components, serving clients globally."
          />
          <List listItems={listItems} className="" />
          <Button className="mt-10">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
