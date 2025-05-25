import React from "react";
import { useNavigate } from "react-router-dom";
import { MailCheck, SquareCode } from "lucide-react";
import emailAutomationImage from "../assets/email-automation.png";
import htmlBanner from "../assets/htmlbanner.png";
import Heading from "./Heading";
import Badge from "./Badge";
import ScrollReveal from "./ScrollReveal";
import BorderHighlightEffect from "./BorderHighlightEffect";

const ZfeatureCards = () => {
  const navigate = useNavigate();

  const tools = [
    {
      title: "Email Automation",
      description:
        "Generate personalized email prompts using AI. This helps businesses streamline their email marketing efforts by crafting relevant messages for different customer segments.",
      image: emailAutomationImage,
      icon: <MailCheck className="w-6 h-6 mr-2" />,
      reverse: false,
    },
    {
      title: "HTML Canvas",
      description:
        "Upload an ad image and specify elements for automation. AI will generate the HTML canvas script required for an interactive ad experience.",
      image: htmlBanner,
      icon: <SquareCode className="w-6 h-6 mr-2" />,
      reverse: true,
    },
    {
      title: "HTML Canvas",
      description:
        "Upload an ad image and specify elements for automation. AI will generate the HTML canvas script required for an interactive ad experience.",
      image: htmlBanner,
      icon: <SquareCode className="w-6 h-6 mr-2" />,
      reverse: false,
    },
    {
      title: "Email Automation",
      description:
        "Generate personalized email prompts using AI. This helps businesses streamline their email marketing efforts by crafting relevant messages for different customer segments.",
      image: emailAutomationImage,
      icon: <MailCheck className="w-6 h-6 mr-2" />,
      reverse: true,
    },
  ];

  return (
    <div className="my-10  ">
      <Badge className="opacity-70 mt-12 ">Our Tools</Badge>
      <ScrollReveal>
        <Heading
          className="font-extrabold text-center mt-5"
          title="Supercharge Your Workflow with AI Tools"
          text="Explore tools that can automate and accelerate your operations"
        />

        <div className="flex flex-col  gap-8 mt-10 mx-40  max-xl:mx-60 max-lg:mx-40 max-md:mx-20 max-sm:mx-2">
          {tools.map((tool, index) => (
            <BorderHighlightEffect key={index}>
              <div
                onClick={() => navigate("/sign_in")}
                className={`flex flex-col md:flex-row ${
                  tool.reverse ? "md:flex-row-reverse" : ""
                } items-center  gap-6 p-6 rounded-lg shadow-lg border border-white/20 bg-gradient-to-br from-indigo-600/20 via-indigo-300/10 to-indigo-600/20 hover:cursor-pointer transition-colors duration-300 hover:bg-black/30`}
              >
                <img
                  src={tool.image}
                  alt={tool.title}
                  className="w-full md:w-1/2 h-48 object-cover rounded-md"
                />
                <div className="md:w-1/2 text-left">
                  <h3 className="text-xl font-bold flex items-center mb-2">
                    {tool.icon}
                    {tool.title}
                  </h3>
                  <p className="text-sm text-slate-300">{tool.description}</p>
                </div>
              </div>
            </BorderHighlightEffect>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};

export default ZfeatureCards;
