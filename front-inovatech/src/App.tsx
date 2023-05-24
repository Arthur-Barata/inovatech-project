import { Fragment } from "react";
import { MainRoutes } from "./routes";
import { Footer } from "./shared/components/Footer";
import { Header } from "./shared/components/Header";
import { Container } from "./styles/global-styles";

function App() {
  return (
    <Fragment>
      <Header />
      <Container>
        <MainRoutes />
      </Container>
      <Footer />
    </Fragment>
  );
}

export default App;
