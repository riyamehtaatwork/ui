import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import ai from "../assets/ai.jpg";
import bar_up from "../assets/bar_up.jpg";
import bentoAnimation from "../assets/bentoAnimation.jpg";
import pair_up from "../assets/pair_up.jpg";

import { cn } from "../../utils/cn";

import BorderHighlightEffect from "./BorderHighlightEffect";

// Updated items array with image URLs
const items = [
  {
    title: "Boost your productivity",
    description:
      "Drive your business forward with continuously improving AI solutions that scale with your goals.",
    imageUrl: bar_up, // Replace with actual image paths
  },
  {
    title: "Seamless Synergy",
    description:
      "Achieve flawless integration across processes with interconnected AI agents working in perfect harmony.",
    imageUrl: ai,
  },
  {
    title: "Intelligence That Grows With You",
    description:
      "Our AI evolves and adapts over time to meet your dynamic business needs.",
    imageUrl: pair_up,
  },
  {
    title: "Analytics That Drive Impact",
    description:
      "Unlock the story behind your data with advanced analytics and tailored insights.",
    imageUrl: bentoAnimation,
  },
  {
    title: "Effortless Integration, Total Security",
    description:
      "Seamlessly integrate AI into your existing systems without compromising on safety.",
    imageUrl: pair_up,
  },
  {
    title: "Enhanced Efficiency and Focus",
    description:
      "Automating tasks allows teams to concentrate on strategic initiatives, improving overall productivity.",
    imageUrl: ai,
  },
  {
    title: "Cost and Resource Optimization",
    description:
      "Reduces manual intervention, minimizes errors, and optimizes resource utilization for significant cost savings.",
    imageUrl: bentoAnimation,
  },
];

export default function BentoGridDemo() {
  return (
    <BorderHighlightEffect className="max-w-screen-xl mx-24 lg:mx-auto max-xl:mx-auto">
      <BentoGrid className="relative mx-auto m-10 p-4 rounded-3xl backdrop-blur-xl xl:max-w-6xl lg:max-w-4xl md:max-w-3xl overflow-hidden max-xl:mx-auto">
        {/* Glowing Ring Effect */}
        <div className="absolute inset-0 max-w-full p-4 rounded-3xl pointer-events-none">
          {/* Outer Ring (#04202C - Dark Blue) */}
          <div
            className="absolute inset-0 rounded-3xl border-[2px] border-transparent 
    bg-[radial-gradient(circle_at_center,rgba(4,32,44,0.6)_40%,rgba(4,32,44,0.4)_70%,rgba(4,32,44,0)_100%)] 
    opacity-40"
          ></div>

          {/* Middle Ring (#D399E4 - Soft Purple) */}
          <div
            className="absolute inset-0 rounded-3xl border-[2px] border-transparent 
    bg-[radial-gradient(circle_at_center,rgba(211,153,228,0.6)_30%,rgba(211,153,228,0.4)_60%,rgba(211,153,228,0)_90%)] 
    opacity-30"
          ></div>

          {/* Central Glow (#FFB861 - Warm Orange) */}
          <div
            className="absolute inset-0 rounded-3xl border-[2px] border-transparent 
    bg-[radial-gradient(circle_at_center,rgba(255,184,97,0.7)_10%,rgba(255,184,97,0.5)_40%,rgba(255,184,97,0)_80%)] 
    opacity-30"
          ></div>
        </div>

        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            className={cn(
              i === 2
                ? "sm:col-span-2 sm:row-span-2 md:col-span-2 md:row-span-2 lg:col-span-1 lg:row-span-1"
                : "",
              i === 3 || i === 6 ? "col-span-2" : ""
            )}
          />
        ))}
      </BentoGrid>
    </BorderHighlightEffect>
  );
}
