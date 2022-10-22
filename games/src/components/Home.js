

import React, {useState} from 'react'
import styled from 'styled-components'
import SignUp from './SignUp'
import { Container, Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import NotLogged from './NotLogged'
import Footer from './Footer'


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
        <>
          <HomeContainer>
            <Card style={{color:'white', fontFamily: 'Bungee', gridColumnStart: '1', gridColumnEnd: '4'}} className='mt-4 text-center bg-dark'>
              <Card.Body>
                <h2 className='text-center'> Profile</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <p>
                  <strong>Email:</strong> {currentUser && currentUser.email}
                </p>
                <Link to='/updateprofile' className='btn btn-success btn-lg w-90 mt-3'> Update Email and Password</Link>

              </Card.Body>  
            </Card>
            <Card style={{color: 'white', fontFamily: 'Bungee'}} className='mt-4 mb-4 text-center bg-dark'>
              <Card.Body>
                <h2 className='text-center mb-4'> Tron</h2>
                <p>
                  <strong>Top Game in our page</strong>
                </p>
                <Link to='/tron_game_start' className='btn btn-success btn-lg w-90 mt-3 mb-3'>Play Tron</Link>
              </Card.Body>
              
            </Card>
            <Card style={{color: 'white', fontFamily: 'Bungee'}} className='mt-4 mb-4 text-center bg-success'>
              <Card.Body>
                <div className='w-100 text-center mt-2 mb-1'>
                  <h2>Snake Game: Try and grow as much as you can</h2>
                  <Link className='btn btn-dark btn-lg w-90 mt-3' to='/'>Play Snake</Link>
                </div>
              </Card.Body>
              
            </Card>
            <Card style={{color: 'white', fontFamily: 'Bungee'}} className='mt-4 mb-4 text-center bg-dark'>
              <Card.Body>
                <div className='w-100 text-center mt-2 mb-1'>
                  <h2>Play a multiplayer chess game</h2>
                  <Link className='btn btn-success btn-lg w-90 mt-3' to='/chess'>Play Chess</Link>
                </div>
              </Card.Body>
              
            </Card>
          </HomeContainer>
          <Footer />

        </>

          
      )}

      {!currentUser && <NotLogged />}
      
      
    </>
    
  )
}




const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
  flex-direction: column;
  width: 80vw;
  margin: 0 auto;
  
`