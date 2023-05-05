import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register(props) {

  const navigate = useNavigate();

  const [details, setDetails] = useState({
    username: '',
    password: '',
    role: '',
    email: '',
    address: '',
  });

  const handleInput = (event) => {
    setDetails({...details, [event.target.name]: event.target.value})
  }

  function handleSubmit(event) {
    event.preventDefault()
    axios.post('http://localhost:3100/register', details).then((response) => {
    }).catch(err => console.log(err))
    navigate('/Home')
  }

  return (
    <>
      <h2 className="text-center mb-4">Sign Up</h2>
      <Form style={{ width: '500px' }} className='mx-auto mt-5 border p-5' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" >
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" name='username' onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Role</Form.Label>
          <Form.Control type="text" placeholder="Role" name='role' onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleInput} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" name='address' onChange={handleInput} />
        </Form.Group>
        
        <Button variant="primary" type="submit" className='d-block mx-auto w-100'>
          Sign Up
        </Button>
      </Form>
    </>
  );
}

export default Register;
