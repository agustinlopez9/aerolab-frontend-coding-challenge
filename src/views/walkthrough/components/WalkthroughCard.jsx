import styled from "styled-components";
import { GradientText } from "components/common";
import {
  gradientBackgroundWithOpacity,
  palette,
} from "components/theme/palette";

const WalkthroughCard = styled.div`
  display: flex;
  position: relative;
  width: 532px;
  height: 676px;
  margin: 0 -2.55rem;
  padding: 0.75rem;
  bottom: ${(props) => props.bottom || "0px"};
  transform: rotate(${(props) => props.rotation || "0deg"});
  background: white;
  border-radius: 2rem;
  border: 1px solid ${palette.border};
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
    border-bottom: 1px solid ${palette.border};
    ${gradientBackgroundWithOpacity}
    overflow: hidden;
    img {
      position: relative;
      bottom: 0.375rem;
      width: inherit;
    }
  }
  .text-container {
    padding: 1rem 1.5rem 1rem 1.5rem;
    width: 100%;
    div {
      display: flex;
      align-items: center;
      gap: 1rem;
      img {
        background-color: ${palette.iconBackground};
        padding: 0.125rem;
        width: 48px;
        height: 48px;
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

function WalkthroughStep({
  imageSrc,
  imageAlt,
  icon,
  stepTitle,
  stepDescription,
  rotation = "0deg",
  bottom = "0px",
}) {
  return (
    <WalkthroughCard rotation={rotation} bottom={bottom}>
      <div className="inner-container">
        <div className="image-container">
          <img src={imageSrc} alt={imageAlt} />
        </div>
        <div className="text-container">
          <div>
            {icon}
            <GradientText
              textTransform="uppercase"
              fontWeight="900"
              fontSize="2rem"
            >
              {stepTitle}
            </GradientText>
          </div>
          <p>{stepDescription}</p>
        </div>
      </div>
    </WalkthroughCard>
  );
}

export default WalkthroughStep;
