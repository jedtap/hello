import React from 'react';
import '../Styles/Testimonials.css';

import TestimonialData from '../Helpers/TestimonialData';


const Testimonials = () => {
  return (<>    
    <h1 className='section-name'>TESTIMONIALS</h1>

    <div className='testimonials-wrapper'>
        { TestimonialData.map((item, key) => 
            <div className='testimonial-unit' key={key} data-name={item.name}>
                <img src={item.img} className='testimonial-photo'/>
                <div className='testimonial-desc' data-name={item.name}>
                    <p>{item.testimonial}</p>
                    <p className='testimonial-end'>{item.name}</p>
                    <p className='testimonial-end'>{item.position}</p>
                    <p className='testimonial-end'>{item.affiliation}</p>
                </div>
            </div>
        )}


    </div>
  </>);
}

export default Testimonials;


/* 
        <div className='skillset-items'>
          { TestimonialData.map((item, key) => 
            <div className='tile-wrapper' key={key}>
              <i className={item.img}/>
              <p className='item-label' >{item.name}</p>
            </div>
          )}
        </div> */