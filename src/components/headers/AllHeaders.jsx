import React from "react";
import { HeaderWithWordsAppearingOneByOne } from "./HeaderWithWordsAppearingOneByOne";
import Headlines from "../ui/Headlines";
import ContainerForComponents from "../ui/ContainerForComponents";

const AllHeaders = () => {
  return (
    <ContainerForComponents>
      <Headlines>Headers With Words Appearing One By One</Headlines>
      <HeaderWithWordsAppearingOneByOne />
    </ContainerForComponents>
  );
};

export default AllHeaders;
