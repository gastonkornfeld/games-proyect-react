
import React, {useRef} from 'react'
import { useState } from 'react';
import { Card, Form, Button, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom'
import NotLogged from './NotLogged';
import Footer from './Footer';


export default function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {currentUser, updateEmail, updatePassword} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); 
    const navigate = useNavigate();


    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        const promises = []
        setError('');

        setLoading(true);

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }

        if(passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            navigate('/');

        }).catch(() => {
            setError('Failed to update account');
        }).finally(() => {
            setLoading(false);
        })
    }
  return (
    <>
        {currentUser && (
            <>
                <Container className='d-flex align-items-center justify-content-center' style={{ minHeight: '100vh'}}>
                    <div className='w-100 btn' style={{ maxWidth: '400px'}}>
                        <Card style={{color: 'navy', fontFamily: 'Bungee'}} className='bg-info'>
                            <Card.Body>
                                <h2 className='text-center mb-4'> Update Profile</h2>
                                {error && <Alert variant='danger'>{error}</Alert>}
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group id='email'>
                                        <Form.Label>
                                            Your Email
                                        </Form.Label>
                                        <Form.Control type='email' required ref= {emailRef} default= {currentUser.email} />
                                    </Form.Group>
                                    <Form.Group id='password'>
                                        <Form.Label>
                                            Your Password
                                        </Form.Label>
                                        <Form.Control
                                            type='password'
                                            ref= {passwordRef}
                                            placeholder='Leave blank to keep the same'
                                        />
                                    </Form.Group>
                                    <Form.Group id='password-confirm'>
                                        <Form.Label>
                                            Confirm Your Password
                                        </Form.Label>
                                        <Form.Control
                                            type='password'
                                            ref= {passwordConfirmRef}
                                            placeholder='Leave blank to keep the same'
                                        />
                                    </Form.Group>
                                    <Button
                                        style={{color:'ivory'}}
                                        disabled={loading}
                                        className='w-100 btn btn-primary mt-4'
                                        type='submit'
                                        variant='dark'
                                    >
                                        Confirm Changes
                                    </Button>
                                    
                                </Form>
                            </Card.Body>
                            <div className='w-100 text-center mt-2 mb-1'>
                                <Link to="/">Cancel</Link>
                            </div>
                        </Card>
                        
                    </div>
                </Container>
            <Footer />
            </>

        )}
        {!currentUser && <NotLogged />}
    </>
    
  )
}
