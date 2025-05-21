import React from "react";

const Headlines = ({ children, className }) => {
  return (
    <h1
      className={`text-2xl font-bold text-center mb-5 mt-10 text-indigo-100 ${className}`}
    >
      {children}
    </h1>
  );
};

export default Headlines;
