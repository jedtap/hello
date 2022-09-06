import React from 'react';
import '../Styles/Contact.css';

import Email from '../Images/email.jpg'

const Contact = ({ toggleContact }) => {
  return (<>
    <div className="contact-overlay" style={{display: 'none'}}>
      <div className="contact-body">
        <h4>Contact Jed</h4>
        <p>I am excited to work with your team! Reach out and let us see how I can help. Note: Jed's timezone is GMT+8 Philippine standard time.</p>
        <img src={Email} alt='contact of jed' className='contact-email' />
        <button type="button" className="btn btn-outline-dark" onClick={()=>{toggleContact()}}>Close</button>
      </div>
    </div>
  </>);
}

export default Contact;