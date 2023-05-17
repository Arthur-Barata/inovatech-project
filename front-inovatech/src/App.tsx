import { Fragment } from "react";
import Dashboard from "./pages/main";
import DragBox from "./pages/quickProblemSolving";
import { Footer } from "./shared/components/Footer";
import { Header } from "./shared/components/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <DragBox />
      <Dashboard />
      <Footer />
    </Fragment>
  );
}

export default App;
