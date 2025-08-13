import styled from "styled-components";
import {
  gradientBackgroundWithOpacity,
  palette,
} from "components/theme/palette";
import {
  WalkthroughFirstStep,
  WalkthroughSecondStep,
  WalkthroughThirdStep,
} from "assets/illustrations";
import { GradientText } from "components/common";
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

const WalkthroughCard = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 532px;
  height: 676px;
  margin: 0 -2.55rem;
  padding: 0.75rem;
  bottom: ${(props) => props.bottom || "0px"};
  transform: rotate(${(props) => props.rotation || "0deg"});
  background: white;
  border-radius: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  .inner-container {
    width: 100%;
    border: 1px solid ${palette.border};
    border-radius: 1.5rem;
    overflow: hidden;
  }
  .image-container {
    width: 508px;
    height: 498px;
    border-radius: 1.5rem 1.5rem 0 0;
    ${gradientBackgroundWithOpacity}
    overflow: hidden;
    img {
      position: relative;
      bottom: 0.375rem;
      width: 100%;
    }
  }
  .text-container {
    padding: 1rem 1.5rem 1rem 1.5rem;
    width: 100%;
    text-align: left;
    div {
      display: flex;
      gap: 1rem;
      img {
        background-color: ${palette.iconBackground};
        padding: 0.125rem;
        border-radius: 0.5rem;
      }
    }
    p {
      font-size: 1.125rem;
      font-weight: 600;
      color: ${palette.textSecondary};
      max-width: 372px;
    }
  }
`;

function Walkthrough() {
  return (
    <WalkthroughContainer>
      <WalkthroughBackground />
      <StepsContainer>
        <WalkthroughCard rotation="-3deg">
          <div className="inner-container">
            <div className="image-container">
              <img src={WalkthroughFirstStep} alt="walkthrough-1-desktop.png" />
            </div>
            <div className="text-container">
              <div>
                <WalkthroughFirstStepIcon width="32px" />
                <GradientText
                  textTransform="uppercase"
                  fontWeight="900"
                  fontSize="2rem"
                >
                  1—browse
                </GradientText>
              </div>
              <p>Browse our tech catalog with more than 20 top tech products</p>
            </div>
          </div>
        </WalkthroughCard>
        <WalkthroughCard bottom="30px">
          <div className="inner-container">
            <div className="image-container">
              <img
                src={WalkthroughSecondStep}
                alt="walkthrough-2-desktop.png"
              />
            </div>
            <div className="text-container">
              <div>
                <WalkthroughSecondStepIcon width="32px" />
                <GradientText
                  textTransform="uppercase"
                  fontWeight="900"
                  fontSize="2rem"
                >
                  2—choose
                </GradientText>
              </div>
              <p>Exchange your hard earned AeroPoints for the item you want</p>
            </div>
          </div>
        </WalkthroughCard>
        <WalkthroughCard rotation="3deg">
          <div className="inner-container">
            <div className="image-container">
              <img src={WalkthroughThirdStep} alt="walkthrough-3-desktop.png" />
            </div>
            <div className="text-container">
              <div>
                <WalkthroughThirdStepIcon width="32px" />
                <GradientText
                  textTransform="uppercase"
                  fontWeight="900"
                  fontSize="2rem"
                >
                  3—enjoy!
                </GradientText>
              </div>
              <p>
                All done, you can relax! We’ll take care of delivery of your
                tech item!
              </p>
            </div>
          </div>
        </WalkthroughCard>
      </StepsContainer>
    </WalkthroughContainer>
  );
}

export default Walkthrough;
