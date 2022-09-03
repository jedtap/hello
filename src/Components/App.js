import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../Styles/App.css';

import Navbar from './Navbar';
import Hero from './Hero';
import Skillset from './Skillset'
import Projects from './Projects'
import About from './About';

const App = () => {
  return (<>
    <BrowserRouter>

    <Navbar />
      <Routes>
        <Route path='/hello' element={<>
          <Hero />
          <Skillset />
          <br />
          <Projects />
          <br />
        </>} />
        <Route path='/hello/about' element={<About />} />
      </Routes>
    </BrowserRouter >

  </>);
}

export default App;