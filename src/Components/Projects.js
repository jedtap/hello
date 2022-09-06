import React from 'react';
import '../Styles/Projects.css';

import Github from '../Icons/github.svg';
import Open from '../Icons/open.svg';
import ProjsData from '../Helpers/ProjsData';

const Projects = () => {
  return (<>
    <h1 className='section-name'>PROJECTS</h1>
    <div className='content-wrap-projs'>
      <div className='projects-wrapper'>

        { ProjsData.map((item, key) => 
          <div className="projects-tile" key={key}>
            <a href={item.live} target="_blank" title="Visit project's live demo"> <img src={item.img} alt={item.alt} className="projects-preview" /> </a>
            <div className="projects-header">
            <a href={item.live} target="_blank" title="Visit project's live demo"> <h2 className="projects-name">{item.name}</h2> </a>
              <div className="projects-icons">
                <a href={item.github} target="_blank" title="Check out the code here"><img className="proj-icon-tile" src={Github} /></a>
                <a href={item.live} target="_blank" title="Visit project's live demo"><img className="proj-icon-tile" src={Open} /></a>  
              </div>
            </div>
            <p>{item.desc}</p>
          </div>
        )}

      </div>
    </div>
  </>);
}

export default Projects;