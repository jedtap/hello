import React from 'react';
import '../Styles/Skillset.css';

import CodeData from '../Helpers/CodeData';
import ToolsData from '../Helpers/ToolsData';
import ExpData from '../Helpers/ExpData';

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
          { ToolsData.map((item, key) => 
            <div className='tile-wrapper' key={key}>
              <i className={item.img}/>
              <p className='item-label' >{item.name}</p>
            </div>
          )}
        </div>
      </div>

      <div className='skillset-cols'>
        <h2 className='sub-name'>Experience in</h2>
        <div className='skillset-items-exp'>
            { ExpData.map((item, key) => 
              <div className='exp-items' key={key}>
                <img src={item.img} alt={item.alt} className='exp-icons' />
                <p className='exp-names'>{item.name}</p>
              </div>            
            )}
        </div>  
      </div>

    </div>
  </>);
}

export default Skillset;