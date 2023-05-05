import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [details, setDetails] = useState({
        email: '',
        password: '',
    });

    const [message, setMessage] = useState("")
    
    const handleInput = (event) => {
        setDetails({...details, [event.target.name]: event.target.value})
    }
    const navigate = useNavigate();
    
    function handleSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost:3100/login', details).then((response) => {
            setMessage(response.data.data)
            if(response.data.message) {
                localStorage.setItem('token', response.data.token);
                navigate('/Home')
                window.location.reload()
            }
        }).catch(err => console.log(err))
    }
    


    return (
        <div>
            <h2 className="text-center mb-4">Sign In</h2>
            <Form style={{ width: '500px' }} className='mx-auto mt-5 border p-5' onSubmit={handleSubmit} >
                
                <Form.Group className="mb-3" controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' onChange={handleInput} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name='password' onChange={handleInput} />
                <small style={{color: 'red', marginTop: '5px'}}>{message}</small>
                </Form.Group>
                
                <Button variant="primary" type="submit" className='d-block mx-auto w-100'>
                    Sign In
                </Button>
            </Form>
        </div>
    );
}

export default Login;