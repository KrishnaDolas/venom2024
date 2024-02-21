// App.js

import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Wordpress from './Components/Wordpress';
import Coding from './Components/Coding';
import Preloader from './Components/Preloader';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate the delay of your actual content loading
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/Wordpress" element={<Wordpress />} />
            <Route path="/Coding" element={<Coding />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
