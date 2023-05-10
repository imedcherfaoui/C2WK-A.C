import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../../firebase";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../context/users.services";

function Register(props) {

  const [username, setUsername ] = useState('');
  const [email, setEmail ] = useState('');
  const [password, setPassword ] = useState('');
  const [address, setAddress ] = useState('');
  const role = 'user';

  const [message, setMessage ] = useState('');
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    if (address.length < 1) {
      setMessage("Please enter an address");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const uid = userCredentials.user.uid;
        const userRef = doc(db, "users", uid);
        const user = { email, password, address, username, role };
        return setDoc(userRef, user);
      }).then(() => {
        navigate('/Home');
      }).catch((error) => {
        alert(error.message);
      });
  }

  return (
    <>
      <h2 className="text-center mb-4">Sign Up</h2>
      <Form style={{ width: '500px' }} className='mx-auto mt-5 border p-5' onSubmit={signUp}>
        
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {password.length < 6 ? 
          <p className="text-danger mt-1">Password must be at least 6 characters</p> : ""}
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
          {address.length < 6 ? 
          <p className="text-danger mt-1">{message}</p> : ""}
        </Form.Group>
        
        <Button variant="primary" type="submit" className='d-block mx-auto w-100'>
          Sign Up
        </Button>
      </Form>
    </>
  );
}

export default Register;
