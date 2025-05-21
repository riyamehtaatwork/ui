import React from "react";
import bug from "../assets/bug.jpg";
import dark from "../assets/dark.jpg";
import scroll from "../assets/scroll.png";
import ContainerForComponents from "../../ui/ContainerForComponents";
import Headlines from "../../ui/Headlines";
import ProductCard from "./ProductCard";
const FeaturesWithImagesAndLink = () => {
  const products = [
    {
      id: 1,
      image: bug, // Replace with your actual image import
      title: "Bug Squasher 3000",
      description: "Eliminate bugs with style and maybe a little bit of panic.",
    },
    {
      id: 2,
      image: dark,
      title: "Dark Mode Enabler",
      description: "Make your eyes happy—one dark pixel at a time.",
    },
    {
      id: 3,
      image: scroll,
      title: "Infinite Scroll Machine",
      description: "Because who needs footers, anyway?",
    },
  ];
  return (
    <ContainerForComponents>
      <Headlines>Features With Images And Link With Bg Gradient</Headlines>
      <div className="w-full max-w-screen-xl mx-auto mt-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 max-sm:grid-cols-1 place-items-center">
          {products.map((product) => (
            <div
              key={product.id}
              className={`flex justify-center w-full max-w-80 `}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </ContainerForComponents>
  );
};

export default FeaturesWithImagesAndLink;
