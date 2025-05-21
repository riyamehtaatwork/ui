import React from "react";
import Heading from "./Heading";
import Badge from "./Badge";
import FadeInCard from "./FadeInCard";
import {
  Cpu,
  Award,
  Shrub,
  FastForward,
  PersonStanding,
  Workflow,
} from "lucide-react";

const FlowingInFeatures = () => {
  const cards = [
    {
      title: "Innovation at the Core",
      desc: "We believe startups must lead—not follow. We're driven by curiosity and use the latest AI tools to craft impactful, scalable solutions.",
      image: <Cpu className="max-w-7  object-contain" />,
    },
    {
      title: "Built on Trust",
      desc: "We're honest, transparent, and always upfront with our clients and team. Integrity is non-negotiable.",
      image: <Award className="max-w-7  object-contain" />,
    },
    {
      title: "Grow Together",
      desc: "We grow when our clients grow. Every solution we build is designed to unlock efficiency and open up new opportunities for scale.",
      image: <Shrub className="max-w-7  object-contain" />,
    },
    {
      title: "Fast, Focused, Flexible",
      desc: "Speed matters. We stay lean, adapt quickly, and deliver value without the fluff.",
      image: <FastForward className="max-w-7  object-contain" />,
    },
    {
      title: "Human-First Tech",
      desc: "AI is powerful—but people come first. We create tools that empower, not replace.",
      image: <PersonStanding className="max-w-7  object-contain" />,
    },
    {
      title: "Bias for Action",
      desc: "We don't over-plan—we execute. We move fast, learn faster, and always keep shipping to create momentum and results.",
      image: <Workflow className="max-w-7  object-contain" />,
    },
  ];

  return (
    <div className="flex items-center justify-center mt-8 md:mt-12">
      <div className="flex-col flex w-full max-w-7xl px-4">
        <Badge className="mb-2 md:mb-3 opacity-70">Our Core Values</Badge>

        <Heading
          className="max-sm:text-center max-sm:mt-3"
          title="The Principles Powering Pravidhi"
          text="Our values shape everything we do at Pravidhi. From innovation to integrity, we're committed to building AI solutions that empower businesses and drive real impact."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 mx-2 sm:-m-1 md:mx-6 lg:mx-8  max-sm:mx-0">
          {cards.map((card, index) => (
            <FadeInCard
              key={index}
              from={index % 2 === 0 ? "left" : "right"}
              delay={index * 0.1}
            >
              <div className="bg-[#0a202b] rounded-xl md:rounded-2xl p-4 md:p-6 shadow-xl border border-[#3e5c76] transition-all hover:scale-[1.02] max-md:h-36 h-40 max-sm:h-44 max-xl:h-40">
                <div className="flex items-center gap-3 md:gap-4">
                  {card.image && card.image}
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {card.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-neutral-200 mt-2 md:mt-4 leading-relaxed max-sm:mt-3">
                  {card.desc}
                </p>
              </div>
            </FadeInCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlowingInFeatures;
