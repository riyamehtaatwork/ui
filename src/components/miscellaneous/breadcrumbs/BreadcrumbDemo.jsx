import React from "react";
import Breadcrumb from "./Breadcrumb";
import ContainerForComponents from "../../ui/ContainerForComponents";
import Headlines from "../../ui/Headlines";
const BreadcrumbDemo = () => {
  const example = [
    { label: "All Tools", path: "/all-tools" },
    { label: "Email Generation Dashboard", path: "/all-leads" },
    { label: "Generated Emails" },
  ];
  return (
    <div>
      <ContainerForComponents className="bg-black">
        <Headlines>Bread Crumbs Component</Headlines>
        <Breadcrumb breadcrumbs={example} />
      </ContainerForComponents>
    </div>
  );
};

export default BreadcrumbDemo;
