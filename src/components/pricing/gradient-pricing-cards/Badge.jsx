import React from "react";

const Badge = ({ children, className }) => {
  return (
    <div className="flex items-center justify-center">
      <span className={`border font-mono p-2 rounded-lg ${className}`}>
        {children}
      </span>
    </div>
  );
};

export default Badge;
