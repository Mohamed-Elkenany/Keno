import React from 'react';
import {BsCart3, BsHeart, BsSearch} from 'react-icons/bs'
const Product = ({item}) => {
  return (
    <div className='pro-container'>
      <img src={item.img} />
      <div className="info">
        <div className="icon">
          <BsCart3/>
        </div>
        <div className="icon">
          <BsSearch/>
        </div>
        <div className="icon">
          <BsHeart/>
        </div>
      </div>
    </div>
  );
}

export default Product;
