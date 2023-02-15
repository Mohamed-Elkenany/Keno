import React from 'react';
import { popularProduct } from '../data'
import Product from '../components/Product';
const Products = () => {
  return (
    <div className='pros-container'>
          {popularProduct.map(item => (
              <Product item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Products;
