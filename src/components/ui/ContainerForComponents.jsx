import React from "react";

const ContainerForComponents = ({ children }) => {
  return (
    <div className="border rounded-xl border-white/30 m-5 p-5">{children}</div>
  );
};

export default ContainerForComponents;
