import React from 'react';

const CategoreItems = ({item}) => {
  return (
      <div className='catItem' key={item.id}>
          <img src={item.img} />
          <div className="info">
              <h1>{item.title}</h1>
          <button>SHOP NOW</button>
          </div>
    </div>
  );
}

export default CategoreItems;
