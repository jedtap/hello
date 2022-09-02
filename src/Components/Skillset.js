import React from 'react';
import '../Styles/Skillset.css';

import CodeData from '../Helpers/CodeData';

const Skillset = () => {
  return (<>    
    <h1 className='section-name'>SKILLSET</h1>

    <div className='skillset-wrapper'>

      <div className='skillset-cols'>
        <h2 className='sub-name'>Code using</h2>
        <div className='skillset-items'>
          { CodeData.map((item, key) => 
            <div className='tile-wrapper' key={key}>
              <i className={item.img}/>
              <p className='item-label' >{item.name}</p>
            </div>
          )}
        </div>
      </div>

      <div className='skillset-cols'>
        <h2 className='sub-name'>Dev tools</h2>
        <div className='skillset-items'>

        </div>
      </div>

      <div className='skillset-cols'>
        <h2 className='sub-name'>Experience in</h2>
        <div className='skillset-items'>

        </div>  
      </div>

    </div>
  </>);
}

export default Skillset;