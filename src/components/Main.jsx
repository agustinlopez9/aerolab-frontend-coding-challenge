import styled from "styled-components";

const MainSection = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 90vh;
  max-width: 1464px;
  margin: 80px auto;
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
    background: -webkit-linear-gradient(to right, #176feb 0%, #ff80ff 100%);
    background: -moz-linear-gradient(to right, #176feb 0%, #ff80ff 100%);
    background: linear-gradient(to right, #176feb 0%, #ff80ff 100%);
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
    position: relative;
    left: 70px;
    bottom: 105px;
    float: right;
    background-image: url("assets/illustrations/hero-desktop.png");
    background-size: 875px;
    background-repeat: no-repeat;
    background-position: bottom -40px center;
    width: 897px;
    height: 795px;
    div {
      width: 722px;
      height: 600px;
      background: linear-gradient(
        102.47deg,
        rgba(23, 111, 235, 0.5) -5.34%,
        rgba(255, 128, 255, 0.5) 106.58%
      );
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
      border-radius: 104px;
      z-index: -1;
    }
  }
  .wave-pattern {
    position: absolute;
    width: 100%;
    top: 15%;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -20;
    background-image: url("assets/illustrations/single-wave-pattern.svg");
  }
`;

const StyledButton = styled.a`
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
  background: #176feb;
  background: -webkit-linear-gradient(to right, #176feb 0%, #ff80ff 100%);
  background: -moz-linear-gradient(to right, #176feb 0%, #ff80ff 100%);
  background: linear-gradient(to right, #176feb 0%, #ff80ff 100%);
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
        <StyledButton href="/#products-list">
          VIEW ALL PRODUCTS
          <img
            alt="logo-menu"
            src={process.env.PUBLIC_URL + "/assets/icons/arrow-down.svg"}
          />
        </StyledButton>
      </div>
      <div className="background-image">
        <div></div>
      </div>
      <div className="wave-pattern" />
    </MainSection>
  );
}

export default Main;
