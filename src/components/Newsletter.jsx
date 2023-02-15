import React from 'react';
import {MdSend} from 'react-icons/md';

const Newsletter = () => {
  return (
    <div className='new-container'>
          <h1>New letter</h1>
          <div className="description">Get timely updates from your favorite prodects</div>
          <div className="Input-container">
              <input type="text" placeholder='Your email'/>
              <button>
                  <MdSend style={{fontSize:"20px"}}/>
              </button>
          </div>
    </div>
  );
}

export default Newsletter;
