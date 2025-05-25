import React from "react";

const CustomButton = ({
  text = "Click Me", // Default text
  onClick = () => {}, // Default click handler
  className = "", // Additional custom styles via Tailwind
  tabIndex = 0, // Accessibility
  ariaLabel = "Button",
  disabled = false,
  children, // Accessibility
}) => {
  return (
    // <div className="flex flex-col">
    <button
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      onClick={!disabled ? onClick : undefined}
      className={`w-full   text-nowrap text-white/90 text-lg border border-[#D399E4] border-opacity-50 rounded-[40px] transition-all text-white  bg-[#D399E4]/30 hover:border-white hover:bg-transparent   ${className}`}
      // bg-gradient-to-r from-[#D399E4]/30 via-[#09212B]/60 to-[#D399E4]/30
    >
      {children || text}
    </button>
    // </div>
  );
};

export default CustomButton;
