import styled from "styled-components";
import { gradientBackground } from "components/theme/palette";
import { HeroDesktop } from "assets/illustrations";

const BackgroundImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: url(${HeroDesktop});
  position: relative;
  bottom: 1.75rem;
  height: 700px;
  background-size: 900px;
  background-repeat: no-repeat;
  background-position: bottom -55px center;
  div {
    width: 722px;
    height: 600px;
    ${gradientBackground}
    opacity: 0.51;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
    border-radius: 6.5rem;
    z-index: -1;
  }
`;

function HeroImage() {
  return (
    <BackgroundImage>
      <div />
    </BackgroundImage>
  );
}

export default HeroImage;
