import { Add, Remove } from '@mui/icons-material';
import React from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Cart = () => {
  return (
    <div className='cart-container'>
      <Navbar/>
          <Announcement />
          <div className="wrapper">
              <h1>YOUR BAG</h1>
              <div className="top">
                  <button className="topButton one">CONTINUE SHOPPING</button>
                  <div className="topTexts">
                      <span className="toptext">Shopping Bag (2)</span>
                      <span className="toptext">Your Wishlist (0)</span>
                  </div>
                  <button className="topButton two">CHECKOUT NOW</button>
              </div>
              <div className="bottom">
                  <div className="info">
                      <div className="product">
                          <div className="productDetail">
                              <img src="https://ae01.alicdn.com/kf/S7698f7a35cd443dda28d115b3e2bc899o.jpg" alt="" />
                              <div className="details">
                                  <span className="productName"><b>Product:</b> dress</span>
                                  <span className="productID"><b>ID:</b> 1234566</span>
                                  <div className="productColor"/>
                                  <span className="productSize"><b>Size:</b> 37.5</span>
                              </div>
                          </div>
                          <div className="priceDetail">
                              <div className="productAmountContainer">
                                  <Add style={{cursor:"pointer"}}/>
                                  <div className="amount">1</div>
                                  <Remove style={{cursor:"pointer"}}/>
                              </div>
                              <div className="productPrice">$ 30</div>
                          </div>
                      </div>
                  </div>
                  <div className="summary">
                      <h2 className="SummaryTitle">ORDER SUMMARY</h2>
                      <div className="summaryItem">
                          <div className="summaryItemText">Subtotal</div>
                          <div className="summaryItemPrice">$ 80</div>
                      </div>
                      <div className="summaryItem">
                          <div className="summaryItemText">Estimated Shipping</div>
                          <div className="summaryItemPrice">$ 5.90</div>
                      </div>
                      <div className="summaryItem">
                          <div className="summaryItemText">Shipping Discount</div>
                          <div className="summaryItemPrice">$ -5.90</div>
                      </div>
                      <div className="summaryItem">
                          <div className="summaryItemText">Total</div>
                          <div className="summaryItemPrice">$ 80</div>
                      </div>
                      <button>CHECKOUT NOW</button>
                  </div>
              </div>
          </div>
      <Footer/>
    </div>
  );
}

export default Cart;
