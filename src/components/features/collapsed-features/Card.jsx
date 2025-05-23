const Card = ({ title, desc, image, isActive, onHover }) => {
  return (
    <div
      className={`relative h-[28rem] -translate-y-10 transition-all duration-300 ease-in-out cursor-pointer rounded-xl shadow-lg overflow-hidden flex flex-col justify-between max-sm:h-[300px] max-md:mx-auto max-sm:mx-auto ${
        isActive ? "w-[15rem] lg:w-[20rem] p-6" : "w-[5rem] lg:w-[8rem] p-3"
      }`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onMouseEnter={onHover}
    >
      {/* Title: On mobile, remove rotation and center at top; on larger screens, rotate 90° */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 md:top-24 max-md:top-24 md:left-10 md:-translate-x-1/2  max-sm:top-10">
        <h3
          className={`text-white/80 font-bold text-md whitespace-nowrap transition-transform duration-300 ease-in-out ${
            isActive
              ? "rotate-0 translate-x-40 max-lg:translate-x-20 max-md:translate-x-0"
              : "md:rotate-90 max-md:rotate-90 max-sm:rotate-0"
          }`}
        >
          {title}
        </h3>
      </div>

      {/* Description (Smooth Fade-in, Fixed Height) */}
      <div
        className={`absolute ${
          window.innerWidth < 768 ? "bottom-4" : "bottom-12 lg:bottom-10"
        } left-4 right-4 bg-[#09212B]/50 text-white pl-3 pt-3 rounded-lg transition-opacity duration-500 ease-in ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
        style={{
          height: "12rem", // Fixed height to prevent stretching
          overflow: "hidden",
        }}
      >
        <p className="text-sm opacity-80 max-w-56">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
