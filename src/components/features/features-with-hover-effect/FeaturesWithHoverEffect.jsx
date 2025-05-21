import React from "react";
import Heading from "./Heading";
import BorderHighlightEffect from "./BorderHighlightEffect";
import rocket from "../assets/rocket.svg";
import check from "../assets/check.svg";
import bulb from "../assets/bulb.svg";

const FeaturesWithHoverEffect = () => {
  const cards = [
    {
      title: "Early-stage, but impact-driven organisation",
      desc: "We're a young startup with a clear focus—creating real and measurable impact for businesses through smart automation.",
      image: rocket,
    },
    {
      title: "Focused on delivering real value through automation",
      desc: "Every solution we build is designed to solve real problems, save time, and improve workflows—not just add features.",
      image: check,
    },
    {
      title: "Combining smart tech with practical strategy",
      desc: "We blend cutting-edge AI with thoughtful planning to ensure our solutions are not just innovative, but also useful and easy to adopt.",
      image: bulb,
    },
  ];

  return (
    <div className="flex items-center justify-center  px-4 sm:px-6 lg:px-8 max-sm:mt-20">
      <div className="flex flex-col w-full max-w-7xl items-center">
        <Heading
          title="Your Partner in AI Automation"
          text="At Pravidhi, we're on a mission to simplify and supercharge business operations through AI-powered automation. As a new-age startup, we're driven by a passion for innovation and a deep understanding of how technology can solve real-world business challenges."
          className="text-center max-sm:-mb-5"
        />

        <div className="grid grid-cols-1 max-sm:flex max-sm:flex-col  sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 w-full px-4 sm:px-6 lg:px-0 mb-20 ">
          {cards.map((card, index) => (
            <BorderHighlightEffect
              colors={[
                "rgba(255, 165, 0, 0.6)",
                "rgba(64, 224, 208, 0.5)",
                "rgba(0, 128, 128, 0.4)",
                "rgba(255, 255, 255, 0)",
              ]}
              key={index}
              className={`${
                index === 2 ? "max-lg:col-span-2 max-lg:mx-auto " : ""
              } flex justify-center`}
            >
              <div
                className={`flex flex-col bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-white h-full  max-md:h-96  max-lg:h-60 max-xl:h-80 max-sm:max-h-72 ${
                  index === 2
                    ? "max-lg:max-h-52 max-md:max-h-60 "
                    : "max-sm:min-h-72"
                } `}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-10 h-10 mb-4 mx-auto"
                />
                <h3 className="text-lg font-semibold mb-4 text-center max-sm:text-sm">
                  {card.title}
                </h3>
                <p className="text-sm mt-auto text-white/70 leading-relaxed text-center max-sm:text-xs">
                  {card.desc}
                </p>
              </div>
            </BorderHighlightEffect>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesWithHoverEffect;
