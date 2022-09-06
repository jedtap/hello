import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import '../Styles/App.css';

import Hello from './Hello';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';

const App = () => {
  const toggleContact = () => {
    const overlay = document.querySelector('.contact-overlay');
    overlay.style.display === 'none' ? overlay.style.display = 'flex' : overlay.style.display = 'none';
  };

  useEffect(() => {
    document.title = "Jed's Portfolio";
  });

  return (<>
    <BrowserRouter>
    <Contact toggleContact={toggleContact} />
    <Navbar toggleContact={toggleContact} />
      <Routes>
        <Route path='/hello' element={<Hello />} />
        <Route path='/hello/about' element={<About />} />
        <Route path='*' element={<Hello />} />
      </Routes>
    </BrowserRouter >
  </>);
}

export default App;