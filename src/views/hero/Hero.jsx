import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import HeroImage from "./components/HeroImage";

const HeroContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 2.375rem;
  margin-bottom: 5rem;
`;

function Hero() {
  return (
    <HeroContainer>
      <HeroSection />
      <HeroImage />
    </HeroContainer>
  );
}

export default Hero;
