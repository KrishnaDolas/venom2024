// App.js
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
            <Routes>
                <Route path="" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>} />
            </Routes>
    </Router>
  );
}

export default App;
