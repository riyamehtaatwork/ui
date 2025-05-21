import Heading from "./Heading";
import cardbg0 from "../assets/cardbg0.png";
import cardbg1 from "../assets/cardbg1.png";
import cardbg2 from "../assets/cardbg2.png";
import cardbg3 from "../assets/cardbg3.png";
import cardbg4 from "../assets/cardbg4.png";
import { useEffect, useState } from "react";
import Card from "./Card";

const CollapsableCardsFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateXValue, setTranslateXValue] = useState(30);

  useEffect(() => {
    const updateTranslateValues = () => {
      setTranslateXValue(window.innerWidth < 1024 ? 1 : 0);
    };

    updateTranslateValues();
    window.addEventListener("resize", updateTranslateValues);
    return () => window.removeEventListener("resize", updateTranslateValues);
  }, []);

  const cards = [
    {
      id: 0,
      title: "AI Automation",
      desc: "Streamline your business processes and improve efficiency with custom AI agents. Automate repetitive tasks and reduce human error, allowing your team to focus on what truly matters.",
      image: cardbg1,
    },
    {
      id: 1,
      title: "Data Insights",
      desc: "Unlock valuable business insights with AI-driven analytics. Transform raw data into actionable strategies to drive smarter decisions and improve overall business performance.",
      image: cardbg2,
    },
    {
      id: 2,
      title: "Custom Solutions",
      desc: "Upgrade your productivity with tailor-made AI solutions. Whether it's predictive analytics or intelligent automation, Pravidhi provides custom solutions to meet your unique business needs.",
      image: cardbg3,
    },
    {
      id: 3,
      title: "Maximized Efficiency",
      desc: "Unleash the full potential of your business by integrating AI into your operations. Our AI agents optimize workflows, increase operational efficiency, and help you achieve your business goals faster.",
      image: cardbg4,
    },
    {
      id: 4,
      title: "Customer Engagement",
      desc: "Improve customer experience with AI-driven communication tools. Deliver personalized responses, resolve issues faster, and provide round-the-clock support, enhancing customer satisfaction and retention.",
      image: cardbg0,
    },
  ];

  return (
    <div>
      <div id="About" className="mt-4">
        <Heading
          className="font-extrabold text-center"
          title="AI Agents Made for Businesses."
          text="Pravidhi unlocks the potential of businesses through artificial intelligence"
        />

        <div className="relative flex flex-col items-center justify-center mx-auto w-full p-10 gap-6 md:flex-row md:-space-x-6 max-md:max-w-xl max-md:flex-row max-sm:flex-col">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="w-full max-sm:w-full md:w-auto md:max-w-[350px] transition-all duration-500 ease-in-out "
              style={{
                transform:
                  index > activeIndex
                    ? `translateX(${(index - activeIndex) * translateXValue}px)`
                    : "translateX(0px)",
              }}
            >
              <Card
                title={card.title}
                desc={card.desc}
                image={card.image}
                isActive={window.innerWidth < 640 || index === activeIndex} // Show all descriptions by default on small screens
                onHover={() => setActiveIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollapsableCardsFeatures;
