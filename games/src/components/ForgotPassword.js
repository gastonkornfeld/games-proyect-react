

import React, {useRef} from 'react'
import { useState } from 'react';
import { Card, Form, Button, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom'

  
export default function ForgotPassword() {
    const emailRef = useRef();
    const { resetPassword } = useAuth();
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const [loading, setLoading] = useState(false);
    
    async function handleSubmit(e) {
        e.preventDefault()
        // set loading prevent the user to click several times the button
        try {
            setMessage('')
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check you inbox for future Instruccions')
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)
    }
  return (
    <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh'}}>
      <div className='w-100 btn' style={{ maxWidth: '400px'}}>
          <Card style= {{color: 'white', fontFamily: 'Bungee'}} className='bg-dark'>
                <Card.Body>
                    <h2 className='text-center mb-4'>  Password Reset</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {message && <Alert variant='success'>{message}</Alert>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group id='email'>
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control type='email' required ref= {emailRef} />
                        </Form.Group>
                        <Button disabled={loading} className='w-100 btn btn-success mt-4' type='submit'>
                            Reset Password
                        </Button>
                    </Form>
                        <div className='w-100 text-center mt-3 mb-1'>
                            <Link to='/login'>Login</Link>
                        </div>
                </Card.Body>
                <Card.Text>
                    You will receive an email with instruccions.
                </Card.Text>
              <div className='w-100 text-center mt-2 mb-1'>
                  Need an account? <Link to="/signup">SignUp</Link>
              </div>
          </Card>
          
      </div>
    </Container>
  )
}
