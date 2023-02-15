import React from 'react';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';

const Prodectlist = () => {
  return (
    <div className='prl-container'>
          <Navbar />
          <Announcement />
          <h2>Dreses</h2>
          <div className="filter-container">
              <div className="filter">
                  <div className="flt-text">Filter Prodects:</div>
                  <select>
                      <option disabled selected>Color</option>
                      <option >White</option>
                      <option >Black</option>
                      <option >Blue</option>
                      <option >Yellow</option>
                      <option >Gray</option>
                      <option >Green</option>
                  </select>
                  <select>
                      <option disabled selected>Size</option>
                      <option >S</option>
                      <option >M</option>
                      <option >L</option>
                      <option >XL</option>
                      <option >2XL</option>
                      <option >3XL</option>
                  </select>
              </div>
              <div className="filter-container">
              <div className="filter">
                      <div className="flt-text">Sort Prodects:</div>
                      <select>
                          <option selected>Newest</option>
                          <option >Price (asc)</option>
                          <option >Price (desc)</option>
                      </select>
              </div>
              </div>
              </div>
          <Products />
          <Newsletter/>
          <Footer/>
          </div>
  );
}

export default Prodectlist;
