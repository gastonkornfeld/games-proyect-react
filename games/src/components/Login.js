


import React, {useRef} from 'react'
import { useState } from 'react';
import { Card, Form, Button, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom'



export default function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    async function handleSubmit(e) {
        e.preventDefault()
        // set loading prevent the user to click several times the button
        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            navigate('/')
        } catch {
            setError('Failed to Sign In')
        }
        setLoading(false)
    }
  return (
    <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh'}}>
        <div className='w-100 btn' style={{ maxWidth: '400px'}}>
            <Card style= {{fontFamily: "Bungee"}}>
                <Card.Body>
                    <h2 className='text-center mb-4'> Login And Play</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type='email' required ref= {emailRef} />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control type='password' required ref= {passwordRef} />
                        </Form.Group>
                        <Button disabled={loading} className='w-100 btn btn-success mt-4' type='submit'>
                            Log In
                        </Button>
                    </Form>
                        <div className='w-100 text-center mt-3 mb-1'>
                            <Link to='/forgotpassword'>Forgot password?</Link>
                        </div>

                </Card.Body>
                <div className='w-100 text-center mt-2 mb-1'>
                    Need an account? <Link to="/signup">SignUp</Link>
                </div>
            </Card>
            
        </div>
    </Container>
  )
}
