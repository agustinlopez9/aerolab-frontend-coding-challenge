import styled from "styled-components";
import LinkButton from "components/common/LinkButton";
import { gradientBackground, palette } from "components/theme/palette";
import { ArrowDownIcon } from "assets/Icons";

const MainSectionText = styled.div`
  .main-text {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.875rem;
  }
  p {
    color: ${palette.textSecondary};
    font-style: normal;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 150%;
  }
  p:first-child {
    text-transform: uppercase;
  }
  span {
    font-style: normal;
    font-weight: 900;
    font-size: 12.5rem;
    line-height: 80%;
    text-transform: uppercase;
    user-select: none;
  }
  span:nth-of-type(1) {
    ${gradientBackground}
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  span:nth-of-type(2) {
    color: ${palette.textPrimary};
  }
`;

function HeroSection() {
  return (
    <MainSectionText>
      <div className="main-text">
        <p>Explore the</p>
        <span>tech</span>
        <span>zone</span>
        <p>
          Here you’ll be able to exchange all of your hard-earned
          <br /> Aeropoints and exchange them for cool tech.
        </p>
      </div>
      <LinkButton width="318px" height="80px" href="/#products-list">
        VIEW ALL PRODUCTS
        <ArrowDownIcon />
      </LinkButton>
    </MainSectionText>
  );
}

export default HeroSection;
