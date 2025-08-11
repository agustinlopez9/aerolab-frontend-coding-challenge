import styled from "styled-components";
import {
  Navbar,
  Footer,
  WaveBackground,
  StyledToastContainer,
} from "components/layout";
import Main from "components/Main";
import ProductsList from "components/ProductsList";

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
        <StyledToastContainer position="bottom-left" />
        <Navbar />
        <Main />
        <ProductsList />
        <Footer />
      </div>
    </Container>
  );
}

export default App;
