import styled from "styled-components";
import {
  Navbar,
  Footer,
  WaveBackground,
  StyledToastContainer,
} from "components/layout";
import Hero from "views/hero/Hero";
import ProductsList from "views/productsList/ProductsList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  .App {
    width: 100%;
    max-width: 1464px;
    margin: 0 80px;
  }
`;

function App() {
  return (
    <Container>
      <WaveBackground />
      <div className="App">
        <Navbar />
        <Hero />
        <ProductsList />
        <Footer />
      </div>
      <StyledToastContainer position="bottom-left" />
    </Container>
  );
}

export default App;
