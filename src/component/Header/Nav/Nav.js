import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../../logoBannar/logo2.png'
import '../Header.css'


const Nav = () => {
  return (

    <div className='container py-3 text-uppercase nav-container'>
      <div className='d-flex justify-content-between align-items-center flex-wrap'>       
      <div className="logo-area">
        <img src={img} alt="" />
      </div>
      <div className="login-area d-flex justify-content-around align-items-center">
         <i className="fas fa-shopping-cart"></i>
         <button> Login</button>
         <button> Sign up </button>
      </div>
      </div>
    </div>
  );
};

export default Nav;