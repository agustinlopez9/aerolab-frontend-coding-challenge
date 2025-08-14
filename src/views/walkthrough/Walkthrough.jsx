import styled from "styled-components";
import WalkthroughStep from "./components/WalkthroughCard";
import { gradientBackgroundWithOpacity } from "components/theme/palette";
import {
  WalkthroughFirstStep,
  WalkthroughSecondStep,
  WalkthroughThirdStep,
} from "assets/illustrations";
import {
  WalkthroughFirstStepIcon,
  WalkthroughSecondStepIcon,
  WalkthroughThirdStepIcon,
} from "assets/Icons";

const WalkthroughBackground = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 528px;
  z-index: -1;
  margin-top: 5rem;
  ${gradientBackgroundWithOpacity}
`;

const WalkthroughContainer = styled.div`
  height: 528px;
  margin-top: 10rem;
  margin-bottom: 17rem;
`;

const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function Walkthrough() {
  return (
    <WalkthroughContainer>
      <WalkthroughBackground />
      <StepsContainer>
        <WalkthroughStep
          imageSrc={WalkthroughFirstStep}
          imageAlt="walkthrough-1-desktop.png"
          icon={<WalkthroughFirstStepIcon />}
          stepTitle="1—browse"
          stepDescription="Browse our tech catalog with more than 20 top tech products"
          rotation="-3deg"
        />
        <WalkthroughStep
          imageSrc={WalkthroughSecondStep}
          imageAlt="walkthrough-2-desktop.png"
          icon={<WalkthroughSecondStepIcon />}
          stepTitle="2—choose"
          stepDescription="Exchange your hard earned AeroPoints for the item you want"
          bottom="30px"
        />
        <WalkthroughStep
          imageSrc={WalkthroughThirdStep}
          imageAlt="walkthrough-3-desktop.png"
          icon={<WalkthroughThirdStepIcon />}
          stepTitle="3—enjoy!"
          stepDescription="All done, you can relax! We’ll take care of delivery of your tech item!"
          rotation="3deg"
        />
      </StepsContainer>
    </WalkthroughContainer>
  );
}

export default Walkthrough;
