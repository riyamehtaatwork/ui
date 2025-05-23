import React, { useState, useEffect, useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";
import gradient from "../assets/gradient.png";
import signupIll from "../assets/signupIll.png";
import uploadIll from "../assets/uploadIll.png";
import agentIll from "../assets/agentIll.png";
import optimize from "../assets/optimize.png";
import networkIll from "../assets/networkIll.png";
// import { BackgroundGradientAnimation } from "./ui/backgroundAnimation";

const timelineData = [
  {
    id: 1,
    title: "Smart Analyzing",
    description:
      "We assess your needs and identify AI solutions to streamline workflows and improve efficiency.",
    illustration: signupIll,
  },
  {
    id: 2,
    title: "AI Development",
    description:
      "Our team builds intelligent automation systems tailored to your business processes.",
    illustration: uploadIll,
  },
  {
    id: 3,
    title: "Seamless Integration",
    description:
      "We smoothly integrate AI solutions into your existing infrastructure with minimal disruption.",
    illustration: agentIll,
  },
  {
    id: 4,
    title: "Continuous Optimization",
    description:
      "We refine performance, analyze insights, and enhance automation for long-term growth.",
    illustration: optimize,
  },
  {
    id: 5,
    title: "Autonomous AI Agents",
    description:
      "Our AI agents simulate human decision-making by autonomously handling tasks, learning from data, and adapting to changing conditions.",
    illustration: networkIll,
  },
];

export default function DynamicVeticalTimelineWithGradient() {
  const [visibleItems, setVisibleItems] = useState({});
  const timelineRef = useRef([]);
  const controls = useAnimation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;
          const id = entry.target.dataset.id;

          setVisibleItems((prev) => ({
            ...prev,
            [id]: isVisible,
          }));
        });
      },
      { threshold: 0.5 }
    );

    timelineRef.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div className="relative ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${gradient})`,
          opacity: 0.4,
          zIndex: -1,
          transform: "rotate(-90deg)",
          width: "100%",
          height: "100%",
          filter: "blur(160px)",
        }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat mt-80"
        style={{
          backgroundImage: `url(${gradient})`,
          opacity: 0.4,
          zIndex: -1,
          transform: "rotate(-180deg)",
          width: "100%",
          height: "100%",
          filter: "blur(160px)",
        }}
      ></div>

      {/* Content */}
      <div className="relative w-full max-w-4xl mx-auto py-16 -translate-y-10 ">
        {/* Glowing Vertical Line */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 h-full w-1 rounded-lg max-sm:left-1/2 max-sm:-translate-x-1/2"
          style={{
            background: "linear-gradient(blue, pink, teal)",
            boxShadow: "0px 0px 10px 5px rgba(139, 92, 246, 0.5)",
          }}
          animate={{
            height: "100%",
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        ></motion.div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => {
          const isVisible = visibleItems[item.id];
          return (
            <motion.div
              key={item.id}
              className={`relative flex w-full items-center mb-16 
                ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} 
                max-sm:flex-col max-sm:text-center max-sm:items-center`}
              data-id={item.id}
              ref={(el) => (timelineRef.current[index] = el)}
              initial={{ opacity: 0, translateY: 100 }}
              animate={
                isVisible
                  ? { opacity: 1, translateY: 0 }
                  : { opacity: 0, translateY: 100 }
              }
              transition={{
                duration: 1,
                type: "spring",
                stiffness: 150,
              }}
            >
              {/* Node */}
              <motion.div
                className="absolute  top-0 w-7 h-7 rounded-full bg-white shadow-md -translate-x-1/2 z-10"
                animate={isVisible ? { scale: [1, 1.4, 1] } : {}}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {/* Outer Wobble Circle */}
                <motion.div
                  className="-z-1 absolute top-1/2 w-12 h-12 rounded-full bg-white opacity-40 -translate-x-1/2 -translate-y-1/2"
                  animate={isVisible ? { scale: [0, 1.2, 0] } : { scale: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                ></motion.div>
              </motion.div>

              {/* Content Box */}
              <motion.div
                className={`relative border bg-white/10 max-sm:ml-0 max-sm:mr-0 max-sm:mt-6 max-sm:w-full max-w-xs 
                rounded-lg p-6 w-[370px] h-auto ${
                  index % 2 === 0 ? "ml-8" : "mr-8"
                }`}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isVisible
                    ? { opacity: 1, y: 0, transition: { delay: 0.3 } }
                    : { opacity: 0, y: 50 }
                }
              >
                <div className="flex items-start max-sm:flex-col max-sm:items-center max-sm:text-center">
                  {/* Illustration */}
                  <img
                    src={item.illustration}
                    alt={item.title}
                    className="w-20 h-20 object-contain max-sm:w-16"
                  />
                  <div className="ml-4 max-sm:ml-0">
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-100 dark:text-n-1 max-md:text-lg max-sm:text-md">
                      {item.title}
                    </h3>
                    {/* Horizontal Line */}
                    <hr className="my-2 border-gray-300 dark:border-gray-600" />
                    {/* Description */}
                    <p className="text-gray-600 dark:text-neutral-100 text-md max-md:text-xs">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
