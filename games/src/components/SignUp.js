

import React, {useRef} from 'react'
import { useState } from 'react';
import { Card, Form, Button, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom'


export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        // set loading prevent the user to click several times the button
        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate('/login')
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false)
    }
  return (
    <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh'}}>
        <div className='w-100 btn' style={{ maxWidth: '400px'}}>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'> SIGN UP TO THE GAMES PAGE</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>
                                Your Email
                            </Form.Label>
                            <Form.Control type='email' required ref= {emailRef} />
                        </Form.Group>
                        <Form.Group id='password'>
                            <Form.Label>
                                Your Password
                            </Form.Label>
                            <Form.Control type='password' required ref= {passwordRef} />
                        </Form.Group>
                        <Form.Group id='password-confirm'>
                            <Form.Label>
                                Confirm Your Password
                            </Form.Label>
                            <Form.Control type='password' required ref= {passwordConfirmRef} />
                        </Form.Group>
                        <Button disabled={loading} className='w-100 btn btn-success' type='submit'>
                            SIGN UP
                        </Button>
                        
                    </Form>
                </Card.Body>
                <div className='w-100 text-center mt-2 mb-1'>
                    Already have an account? <Link to="/login">Log In</Link>
                </div>
            </Card>
            
        </div>
    </Container>
  )
}
