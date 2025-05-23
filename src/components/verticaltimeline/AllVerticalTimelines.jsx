import React from "react";
import ContainerForComponents from "../ui/ContainerForComponents";
import DynamicVeticalTimelineWithGradient from "./dynamic-vertical-timeline-with-gradient/DynamicVeticalTimelineWithGradient";
import Headlines from "../ui/Headlines";
const AllVerticalTimelines = () => {
  return (
    <div>
      <ContainerForComponents className="pb-20">
        <Headlines>Dynamic Vertical Timeline With Gradient </Headlines>

        <DynamicVeticalTimelineWithGradient />
      </ContainerForComponents>
    </div>
  );
};

export default AllVerticalTimelines;
