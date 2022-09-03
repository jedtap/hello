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
            Hi there! My name is Jed and I'm based in the Philippines. I have been working in the FMCG industry for over 3 years. Throughout my journey, I gained skills in project management, IT governance, portfolio management, and financial management. I have been studying web development since 2021 and now more than ready to use my knowledge with your team!
          </p>
          <p>
            It may be weird to see a licensed Mechanical Engineer learning web development in his free time. Do both disciplines even blend well? I get that a lot and I totally feel what you’re feeling right now. Fortunately, Mechanical Engineering is more modern than a generation ago. As early as my bachelor degree, we have been using tools such as MatLab and Lingo in solving equations. We even learn niche programming languages like C++, G-code, and Ladder logic to control the movement of machines. Even my master thesis made use of Genetic Algorithm to optimize components in a wind turbine.
          </p>
          <p>
            Ever since COVID-19 slammed the country, I have been enjoying the benefits of remote work. This made me realize that the current state of work is remote (and there is no turning back!). Distance is no longer a barrier to work with a company based on the other side of the globe. I chose to learn how to build web applications because of its relevance in the next decades to come.
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