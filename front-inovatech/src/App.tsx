import React, { useState } from 'react';
import { Fragment } from "react";
import { Footer } from "./shared/components/Footer";
import { Header } from "./shared/components/Header";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Slice from './pages/slice';

function Home(props: { changeLog: any }) {
  const changeLog = props.changeLog
  return (
    <Fragment>
      <Header changeLog={changeLog} />
      <Dashboard />
      <Footer />
    </Fragment>
  );
}

export function App() {
  const [logged, setLogged] = useState(localStorage.getItem('logged') === 'true')
  const changelog = () => {
    setLogged(localStorage.getItem('logged') === 'true' ? false : true)
    localStorage.setItem('logged', localStorage.getItem('logged') === 'true' ? 'false' : 'true')
  }
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={logged ? <Home changeLog={changelog} /> : <Login changeLog={changelog} />} />
          <Route path="/login" element={<Login changeLog={changelog} />} />
          <Route path="/problem-solving" element={(<Slice changeLog={changelog} />)} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
