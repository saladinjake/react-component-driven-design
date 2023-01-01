import React from "react";
import { Svg } from "assets/svg";
import FormSection from "./Form";
import styled from "styled-components";
import { Flex } from "components/shared/library";

export const StyledIllustration = styled.div`
  margin-top: 300px;
  width: 50vmin;
  margin-left: 10%;
`;

const LeftSection = () => {
  return (
    <div className="leftside">
      <Flex
        style={{ top: "10vmin" }}
        position="relative"
        justifyContent="between"
        alignItems="center"
      ></Flex>
      {/* <Svg.SampleLogo /> */}
      <StyledIllustration>
        <div className="illustration-wrapper">
          <Svg.Pablo></Svg.Pablo>
        </div>
      </StyledIllustration>
    </div>
  );
};

const RightSection = () => {
  return (
    <div className="leftside">
      <FormSection />
    </div>
  );
};

const Login = () => {
  return (
    <div className="flexbox">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default Login;
