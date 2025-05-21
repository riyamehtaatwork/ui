import React from "react";
import Heading from "./Heading";
import { Check, X } from "lucide-react";
import FadeInCard from "./FadeInCard";

const ComparingFeatures = () => {
  const cards = [
    {
      title: "Traditional Manual Work",
      icon: <X className="text-red-500 w-4 h-4" />,
      points: [
        "Susceptible to Human Errors",
        "Limited by Fixed Work Hours",
        "Expensive Labor & Operational Overhead",
        "Slow, Repetitive Processes",
        "Fragmented Tools & Manual Transfers",
        "Inconsistent Output & Bottlenecks",
      ],
    },
    {
      title: "Pravidhi's AI-Powered Automation",
      icon: <Check className="text-green-400 w-4 h-4" />,
      points: [
        "Smart, Data-Informed Decisions",
        "Runs 24/7 Without Fatigue",
        "Scales Efficiently with Minimal Cost",
        "Speeds Up Everyday Tasks",
        "Connects Systems for Smooth Automation",
        "Dependable, Repeatable Results Every Time",
      ],
    },
  ];

  return (
    <div className="flex items-center -mt-10 justify-center py-16 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col w-full max-w-7xl">
        <Heading
          className="max-sm:text-center max-sm:mt-3"
          title="What makes us stand out in the industry"
          text="Discover how our innovative strategies, data-driven approach, and commitment to results set us apart from the competition"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#0a202b] border border-[#3e5c76] rounded-2xl p-6 shadow-md"
            >
              <h3 className="text-xl font-semibold text-neutral-300 mb-4">
                {card.title}
              </h3>
              <ul className="space-y-3">
                {card.points.map((point, idx) => (
                  <div key={idx}>
                    <FadeInCard
                      key={index}
                      from={index % 2 === 0 ? "left" : "right"}
                      delay={index * 0.1}
                    >
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-neutral-200"
                      >
                        <span>{card.icon}</span>
                        <span>{point}</span>
                      </li>
                    </FadeInCard>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComparingFeatures;
