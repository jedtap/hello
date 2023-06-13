import React from 'react';

import Hero from './Hero';
import Skillset from './Skillset'
import Testimonials from './Testimonials'
import Projects from './Projects'

const Hello = () => {
  return (<>
    <Hero />
    <Skillset />
    <br />
    <br />
    <Testimonials />
    <br />
    <Projects />
    <br />
  </>);
}

export default Hello;