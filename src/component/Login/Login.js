import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import initAuthentication from '../../Firebase/firebaseInit';
initAuthentication();

// auth 
const auth  = getAuth();


const Login = () => {
  const { googlesign , facebookSign , githubSign } = useAuth();

 
  
  // email State 
  const [email ,setEmail] = useState('');

  // pass state 
  const [password , setPassword] = useState('');
  



  //Email 
  const getEmail = (e) => {
   setEmail(e.target.value)
  }

  // password
  const getPassword = (e) =>{
    setPassword(e.target.value);
  }

  // submitHandle
  const submitHandle =(e) =>{
      e.preventDefault();
      signInWithEmailAndPassword(auth , email , password)
    .then((userCredential)=> {
      console.log(userCredential.user)
    })
  }

  return (
    <div className='login-section'>
      <h3 className='text-center text-primary'>Log in your account </h3>
      <hr style={{width: '250px' , margin: '0 auto'}} />

  <Form onSubmit={submitHandle} className='container w-25 mt-2'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={getEmail} type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={getPassword} type="password" placeholder="Password" />
  </Form.Group>
  
  <Button className='btn btn-primary' type="submit">
    Login
  </Button>
  <Link to='/signup' className='text-decoration-none ms-4'> Create a new account </Link>
  <br />
  <span className='mt-2 d-block'> <a href="#"> Forget Password ? </a></span>
</Form>

<div className='text-center mt-3 me-4'>
  {/*facebook*/}
      <button onClick={facebookSign} className='px-5 py-2 bg-success rounded text-white border-0'> <i className="fab fa-facebook-f bg-primary px-2 py-2"></i> Continue with facebook </button>
      <br />

  {/* google */}
      <button onClick={googlesign} className='px-5 py-2 mt-3 bg-success rounded text-white border-0'> <i className="fab fa-google text-danger me-3 bg-primary py-2 px-2"></i> Continue with Google </button>
      <br />
  {/*github  */}
      <button onClick={githubSign} className='px-5 mt-2 py-2 mt-3 bg-black rounded text-white border-0'> <i className="fab fa-github me-3 px-2  py-2"></i> Continue with Github </button>
      </div>

 </div>
  );
};

export default Login;