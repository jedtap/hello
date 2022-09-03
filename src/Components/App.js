import React from 'react';
import '../Styles/App.css';

import Navbar from './Navbar';
import Hero from './Hero';
import Skillset from './Skillset'
import Projects from './Projects'

const App = () => {
  return (<>
    <Navbar />
    <Hero />
    <Skillset />
    <br />
    <Projects />
    <br />
  </>);
}

export default App;