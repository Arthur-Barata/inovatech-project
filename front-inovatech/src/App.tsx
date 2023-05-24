import { Fragment } from "react";
import { MainRoutes } from "./routes";
import { Footer } from "./shared/components/Footer";
import { Header } from "./shared/components/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <MainRoutes />
      <Footer />
    </Fragment>
  );
}

export default App;
