import React, { FC } from "react";
import { StyledPageContainer } from "./styles";

const Page: FC = ({ children }) => {
  return (
    <>
      <StyledPageContainer>{children}</StyledPageContainer>
    </>
  );
};

export default Page;
