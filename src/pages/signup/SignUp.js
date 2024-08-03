import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Description from "@/components/signup/Description";
import StepBox from "@/components/signup/stepbox/StepBox";
import Step01 from "@/components/signup/step01/Step01";
import Step02 from "@/components/signup/step02/Step02";
import Step03 from "@/components/signup/step03/Step03";
import signUpBanner from "@/assets/image/signUpBanner.png";

const SignUp = () => {
  const [stepNum, setStepNum] = useState(1);

  return (
    <Wrapper>
      <BannerImg />
      <Description stepNum={stepNum} />
      <StepBox number={stepNum} />
      {stepNum === 1 && <Step01 setStepNum={setStepNum} />}
      {stepNum === 2 && <Step02 setStepNum={setStepNum} />}
      {stepNum === 3 && <Step03 />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 156px 17%;
`;

const BannerImg = styled.div`
  width: 100%;
  height: 270px;
  background-image: url(${signUpBanner});
  background-size: cover;
  display: flex;
  justify-content: right;
  align-items: last baseline;
`;

export default SignUp;
