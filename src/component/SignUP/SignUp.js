import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const SignUp = () => {


    
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
  const {create , auth} = useAuth();

  const Createhandle = create();
  const submitHandle =(e) =>{
      e.preventDefault();
      Createhandle(auth , email , password)
    .then((userCredential)=> {
      console.log(userCredential.user)
    })
  }
  return (
    <div>
      
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
  <Link to='/login' className='text-decoration-none ms-4'> Have e account ? </Link>
  <br />
</Form>
    </div>
  );
};

export default SignUp;