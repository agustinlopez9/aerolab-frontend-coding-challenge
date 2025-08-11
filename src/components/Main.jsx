import styled from "styled-components";
import { ArrowDownIcon } from "assets/Icons";
import { HeroDesktop } from "assets/illustrations";
import { gradientBackground } from "./theme/palette";

const MainSection = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 2.25rem;
  margin-bottom: 5rem;
  .title {
    width: 602px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    p {
      color: #7c899c;
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
  }
  .title :nth-child(2) {
    ${gradientBackground}
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .title :nth-child(3) {
    color: #252f3d;
  }

  .background-image {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-image: url(${HeroDesktop});
    position: relative;
    bottom: 0.5rem;
    height: 700px;
    background-size: 875px;
    background-repeat: no-repeat;
    background-position: bottom -40px center;
    div {
      width: 722px;
      height: 600px;
      ${gradientBackground}
      opacity: 0.51;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
      border-radius: 6.5rem;
      z-index: -1;
    }
  }
`;

const StyledLink = styled.a`
  margin-top: 2.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  width: 318px;
  height: 80px;
  border: none;
  border-radius: 1.5rem;
  ${gradientBackground}
`;

function Main() {
  return (
    <MainSection>
      <div className="title">
        <p>Explore the</p>
        <span>tech</span>
        <span>zone</span>
        <p>
          Here you’ll be able to exchange all of your hard-earned
          <br /> Aeropoints and exchange them for cool tech.
        </p>
        <StyledLink href="/#products-list">
          VIEW ALL PRODUCTS
          <ArrowDownIcon />
        </StyledLink>
      </div>
      <div className="background-image">
        <div></div>
      </div>
    </MainSection>
  );
}

export default Main;
