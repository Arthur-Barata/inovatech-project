import { Fragment } from 'react';
import { Footer } from './shared/components/Footer';
import { Header } from './shared/components/Header';
import Dashboard from './pages/main';

function App() {
  return (
    <Fragment>
      <Header />
      <Dashboard />
      <Footer />
    </Fragment>
  );
}

export default App;
