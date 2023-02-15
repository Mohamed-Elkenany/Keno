import { Email, Phone, Room } from '@mui/icons-material';
import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='foot-container'>
          <div className="left">
              <h1 className="logo">KENO</h1>
              <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo porro excepturi tenetur incidunt et, libero ut inventore quo architecto possimus itaque enim eum at, corporis, expedita voluptatem! Animi, nemo.</div>
              <div className="social-container">
                  <div className="socialIcon">
                      <BsFacebook />
                  </div>
                  <div className="socialIcon">
                      <BsTwitter />
                  </div>
                  <div className="socialIcon">
                      <BsInstagram/>
                  </div>
                  <div className="socialIcon">
                      <BsLinkedin/>
                  </div>
                  <div className="socialIcon">
                      <BsYoutube/>
                  </div>
              </div>
      </div>
          <div className="center">
              <h3>Useful Links</h3>
                  <ul>
                      <li>Home</li>
                      <li>Cart</li>
                      <li>Man Fashion</li>
                      <li>Woman Fashion</li>
                      <li>Accessories</li>
                      <li>My Account</li>
                      <li>Order Tracking</li>
                      <li>Wishlist</li>
                      <li>Wishlist</li>
                      <li>Terms</li>
                  </ul>
      </div>
          <div className="right">
              <h3>Contact</h3>
              <div className="contact-item">
                  <Room  style={{marginRight:"10px"}}/>14 Sheikha Aisha Street 
              </div>
              <div className="contact-item">
                  <Phone style={{marginRight:"10px"}}/>+1 234 56 78
              </div>
              <div className="contact-item">
                  <Email style={{marginRight:"10px"}}/>Keno@gmail.com
              </div>
      </div>
     </div>
  );
}

export default Footer;
