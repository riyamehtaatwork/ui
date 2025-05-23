import React from "react";
import { HeaderWithWordsAppearingOneByOne } from "./HeaderWithWordsAppearingOneByOne";
import Headlines from "../ui/Headlines";
import ContainerForComponents from "../ui/ContainerForComponents";
import HeaderWithDescription from "./HeaderWithDescription";

const AllHeaders = () => {
  return (
    <div>
      <ContainerForComponents>
        <Headlines>Header With Words Appearing One By One</Headlines>
        <HeaderWithWordsAppearingOneByOne />
      </ContainerForComponents>
      <ContainerForComponents>
        <Headlines>Simple Header With Description</Headlines>
        <HeaderWithDescription
          title={"Hello world"}
          text={"this is a simple header with a description"}
        />
      </ContainerForComponents>
    </div>
  );
};

export default AllHeaders;
