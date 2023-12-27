import React from 'react';
import '../Styles/About.css';

import Toga from '../Images/toga.jpg'

const About = () => {
  return (<>
    <h1 className='section-name about-title'>When Engineering meets App Development</h1>
    <div className='about-content'>
      <div className='about-wrapper'>
        <img src={Toga} alt='Jed in a toga' className='about-toga'/>
        <div className='about-narrative'>
          <p>
            Hi there! My name is Jed and I'm based in the Philippines. I have worked in the FMCG industry for 4 years before moving into the startup scene. Throughout my journey, I gained skills in project management, IT governance, portfolio management, financial management, product management, and even Agile/ Scrum principles. In my free time since 2021, I have been studying all about web development and applications of AI. With such skills under my belt, I am more than ready to use my knowledge with your team!
          </p>
          <p>
            It may be weird to see a licensed Mechanical Engineer learning about the IT industry. Do both disciplines even blend well? I get that a lot and I totally feel what you’re feeling right now. Fortunately, Mechanical Engineering is a more modern degree vs one generation ago. As early as my bachelor degree, we have been using tools such as MatLab and Lingo in solving equations. We even learn niche programming languages like C++, G-code, and Ladder logic to control the movement of machines. Even my master thesis made use of Genetic Algorithm to optimize components in a wind turbine.
          </p>
          <p>
            Ever since COVID-19 slammed the country, I realize that our talents and skills can be shared globally. Distance is no longer a barrier to work with an organization based on the other side of the globe. With my skills in IT project management, we will overcome any obstacle that may arise as we journey to your company’s long term vision.
          </p>
          <p>
            Outside of work, I love to explore new cuisine and complete video game series. I may be the awkward dude on our first meetup but that does not stop me from being the hard-working man people know me for. Lets connect!
          </p>   

        </div>
      </div>
    </div>
    <br />
  </>);
}

export default About;