import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import img from '../../../logoBannar/logo2.png'
import '../Header.css'


const Nav = () => {
  const {user , logOut} = useAuth()

  return (

    <div className='container py-3 text-uppercase nav-container'>
      <div className='d-flex justify-content-between align-items-center flex-wrap'>       
      <div className="logo-area">
        <img src={img} alt="" />
      </div>
      <div className="login-area d-flex justify-content-around align-items-center">
         <i className="fas fa-shopping-cart me-2"></i>
          
         {
           user.displayName ? <button onClick={logOut}> logOut </button>  : <Link to='/login'> <button> Login</button> </Link>
         }
        
        <span className='ms-2' style={{fontSize: '14px'}}> {user?.displayName?.slice(0,8)}</span>
        <img src={user.photoURL} width='35' style={{borderRadius: '50%' , marginLeft: '10px'}} alt="" />
         
      </div>
      </div>
    </div>
  );
};

export default Nav;