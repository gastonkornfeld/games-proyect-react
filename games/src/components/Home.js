

import React, {useState} from 'react'
import styled from 'styled-components'
import SignUp from './SignUp'
import { Container, Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import NotLogged from './NotLogged'


export default function Home() {

  const [error, setError] = useState('');
  const {currentUser, logout} = useAuth();
  const navigate = useNavigate();



  async function handleLogOut() {
    setError('');

    try {
      await logout()
      navigate('/login')
    } catch {
      setError('Failed to Logout')
    }

  }
  return (
    <>
      {currentUser && (
        <Card>
          <Card.Body>
            <h2 className='text-center mb-4'> Profile</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <strong>Email:</strong> {currentUser && currentUser.email}
            <Link to='/updateprofile' className='btn btn-primary w-100 mt-3'> Update Profile</Link>

          </Card.Body>
          <div className='w-100 text-center mt-2 mb-1'>
          <Button onClick={handleLogOut} variant='warning'>LOG OUT</Button>
          </div>
        </Card>
      )}

      {!currentUser && <NotLogged />}
      
      
    </>
    
  )
}




