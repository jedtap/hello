import React from 'react';
import '../Styles/Hero.css';

const Hero = () => {
  return (<div className='hero-wrapper'>
    <div className='hero-content'>
      <h1 className='hero-name'>Jed Tapiador</h1>
      <div className='hero-right'>
        <h4 className='hero-title'>Mechanical Engr. x Web App Developer</h4>
        <h4 className='hero-headline'>Building digital web apps for real-life problems</h4>
      </div>
    </div>
  </div>);
}

export default Hero;