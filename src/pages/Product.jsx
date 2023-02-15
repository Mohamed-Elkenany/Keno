import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Product = () => {
  return (
      <div className='pro-page'>
        <Navbar />
          <Announcement />
          <div className="wrapperPro">
              <div className="imageContainer">
                  <img src="https://ae01.alicdn.com/kf/S7698f7a35cd443dda28d115b3e2bc899o.jpg"  />
              </div>
              <div className="infoContainer">
                  <h1>Denim Jumpsuit</h1>
                  <div className="Desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae amet maxime odio quibusdam corporis commodi maiores illum perspiciatis fuga, in rem quos fugiat optio a officia asperiores suscipit dolor! Possimus!</div>
                  <div className="price">$ 20</div>
          <div className="filterContainer">
            <div className="filter">
              <div className="filterTitle">Color</div>
              <div className="filterColor" style={{backgroundColor:"black"}}/>
              <div className="filterColor" style={{backgroundColor:"darkblue"}}/>
              <div className="filterColor" style={{backgroundColor:"gray"}}/>
            </div>
            <div className="filterSize">
              <h3>Size</h3>
            <select >
              <option >XS</option>
              <option >L</option>
              <option >S</option>
              <option >2XL</option>
              <option >M</option>
            </select>
                  </div>
          </div>
          <div className="addContainer">
            <div className="amountContainer">
              <Remove />
              <div className="amount">1</div>
              <Add/>
            </div>
            <button>ADD TO CART</button>
          </div>
        </div>
        </div>
          <Newsletter />
          <Footer/>
    </div>
  );
}

export default Product;
