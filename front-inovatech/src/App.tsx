import { Fragment } from "react";
import Dashboard from "./pages/main";
import { Footer } from "./shared/components/Footer";
import { Header } from "./shared/components/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <Dashboard></Dashboard>
      <Footer />
    </Fragment>
  );
}

export default App;
