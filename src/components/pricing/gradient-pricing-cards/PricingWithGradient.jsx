import { useNavigate } from "react-router-dom";
import Badge from "./Badge";
import CustomButton from "./CustomButton";
import Heading from "./Heading";
import ScrollReveal from "./ScrollReveal";
import { Rocket, Zap, Crown } from "lucide-react";
import BorderHighlightEffect from "./BorderHighlightEffect";
const PricingWithGradient = () => {
  const navigate = useNavigate();
  return (
    <div className="mb-10 w-full">
      <Badge className="opacity-70 mt-12">Pricing</Badge>
      <ScrollReveal>
        <Heading
          className="font-extrabold text-center mt-5"
          title="The Best AI Automation, at the Right Price"
          text="Choose a plan that fits your business needs and start automating with AI"
        />
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="flex gap-5 max-lg:grid max-lg:grid-cols-2 max-lg:mx-20 max-sm:flex max-sm:flex-col max-sm:mx-0">
            {[
              {
                title: "Free Plan",
                price: "$0",
                duration: "/month",
                description: "Perfect for individuals who need basic features.",
                icon: <Rocket className="mr-5" />,

                features: [
                  "Access to basic tools",
                  "Email support (3-5 days)",
                  "Limited analytics",
                  "Random ads about vacuum cleaners",
                ],
                button: (
                  <CustomButton
                    className="bg-transparent py-2 max-md:text-sm"
                    onClick={() => navigate("/sign_in")}
                  >
                    Select Free Plan
                  </CustomButton>
                ),
              },
              {
                title: "Premium Plan",
                price: "$100",
                duration: "/month",

                description: "Ideal for small businesses with advanced tools.",
                icon: <Zap className="mr-5" />,

                features: [
                  "Access to desirable tools",
                  "Priority email support",
                  "Comprehensive analytics",
                  "Customizable dashboards",
                ],
                button: (
                  <CustomButton
                    className=" py-2 text-white max-md:text-sm"
                    onClick={() => navigate("/sign_in")}
                  >
                    Select Premium Plan
                  </CustomButton>
                ),
              },
              {
                title: "Enterprise Plan",
                price: "Custom",
                duration: "",
                description: "Tailored solutions for large organizations.",
                icon: <Crown className="mr-5" />,

                features: [
                  "Custom integrations",
                  "Dedicated account manager",
                  "24/7 priority support",
                  "Advanced security features",
                ],
                button: (
                  <CustomButton
                    className="bg-transparent py-2 max-md:text-sm"
                    onClick={() => navigate("/sign_in")}
                  >
                    Select Enterprise Plan
                  </CustomButton>
                ),
              },
            ].map((plan, index) => (
              <BorderHighlightEffect
                key={index}
                className={`${
                  index === 2 ? "max-lg:col-span-2 max-lg:mx-auto" : ""
                } flex justify-center w-fit`}
              >
                <div className="w-full max-w-[350px] min-h-[450px] p-6 rounded-2xl shadow-lg flex flex-col  justify-between max-md:max-h-80 bg-[#0a202b]/60 border border-white/10  hover:bg-[#0a202b]/80  transition-all duration-300 sm:text-[12px]  text-left bg-radial-gradient from-black/10 via-black/0 to-black/10 ">
                  <h3 className=" flex items-center text-xl md:text-2xl sm:text-md max-md:mb-0 mb-2">
                    {plan.icon}
                    <span className="max-md:text-sm max-md:font-bold">
                      {plan.title}
                    </span>
                  </h3>
                  <h2 className="max-md:-mb-5">
                    <span className="text-3xl font-bold max-md:text-xl">
                      {" "}
                      {plan.price}
                    </span>
                    <span className="max-md:text-xs max-md:opacity-80">
                      {plan.duration}
                    </span>
                  </h2>

                  <p className="text-sm text-slate-300 mb-4 max-md:text-xs max-md:-mb-5">
                    {plan.description}
                  </p>
                  <p className="text-sm text-slate-300 max-md:text-xs max-md:-mb-5">
                    What's included:
                  </p>
                  <ul className="list-disc list-inside max-md:text-xs text-gray-300 space-y-2 mb-6 text-left text-xs md:text-sm">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="max-md:mb-2">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="max-md:-mt-10">{plan.button}</div>
                </div>
              </BorderHighlightEffect>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
};
export default PricingWithGradient;
