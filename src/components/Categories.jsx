import React from 'react';
import { categories } from '../data';
import CategoreItems from './CategoreItems';

const Categories = () => {
  return (
    <div className='cat-container'>
          {categories.map(item => (
              <CategoreItems item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Categories;
