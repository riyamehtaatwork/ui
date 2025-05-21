import { Bolt, Globe, ShieldCheck } from "lucide-react";
import React from "react";

const FeaturesWithSimpleCards = () => {
  const features = [
    {
      id: 0,
      title: "Precision Engineering",
      text: "State-of-the-art machinery and expert engineers ensuring precise manufacturing.",
      icon: <Bolt color="#1c3c84" strokeWidth={2} />,
    },
    {
      id: 1,
      title: "Quality Assurance",
      text: "Rigorous quality control processes meeting international standards.",
      icon: <ShieldCheck color="#1c3c84" strokeWidth={2} />,
    },
    {
      id: 2,
      title: "Global Delivery",
      text: "Timely delivery of products to clients worldwide with tracking systems.",
      icon: <Globe color="#1c3c84" strokeWidth={2} />,
    },
  ];
  return (
    <div className=" mb-32 max-sm:-translate-y-20 max-sm:mb-16">
      <ManufacturingFeaturesCard features={features} />
    </div>
  );
};

const ManufacturingFeaturesCard = ({ features }) => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="w-full text-left dark:bg-blue-950 bg-blue-50 p-6 rounded-xl hover:shadow-2xl hover:shadow-black/10 transition-shadow"
          >
            <div className="mb-3 w-fit rounded-lg bg-blue-200  p-2 text-white">
              {feature.icon}
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {feature.title}
            </div>
            <div className="text-md text-gray-600 dark:text-gray-400">
              {feature.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FeaturesWithSimpleCards;
