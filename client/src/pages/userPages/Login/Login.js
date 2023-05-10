import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { auth } from "../../../firebase";

function Login() {

    const [email, setEmail ] = useState('');
    const [password, setPassword ] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log(userCredentials)
            navigate('/Home')
        }).catch((error) => {
            console.log(error)
            setMessage('incorrect user credentials')
        })
    }


    return (
        <div>
            <h2 className="text-center mb-4">Sign In</h2>
            <Form style={{ width: '500px' }} className='mx-auto mt-5 border p-5' onSubmit={signIn}>
                
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <p className="text-danger mt-1">{message}</p>
                
                <Button variant="primary" type="submit" className='d-block mx-auto w-100'>
                    Sign In
                </Button>
            </Form>
        </div>
    );
}

export default Login;