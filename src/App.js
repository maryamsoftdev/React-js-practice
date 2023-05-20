import React, { useState, useEffect } from 'react';
import './App.css';
// import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PreLoader from './components/PreLoader';
import LoginForm from './components/LoginForm';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    isLoading ? (
      <>
      {/* <Navbar title="TextUtils" /> */}
      <LoginForm/>
      {/* <div className="container"> */}
          {/* <TextForm heading="Enter the text to analyze" /> */}
          {/* </div> */}
      <PreLoader />
      </>
    ) : (
      <>
        {/* <Navbar title="TextUtils" /> */}
        <LoginForm/>
        {/* <div className="container">
          <TextForm heading="Enter the text to analyze" />
        </div> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Router>
      </>
    )
  );
}

export default App;
