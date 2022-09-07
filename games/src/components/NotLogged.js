

import React from 'react'
import styled from 'styled-components'
import { Link} from 'react-router-dom'

import { Container, Card, Button, Alert } from 'react-bootstrap'


export default function NotLogged() {
  return (
    <>
        <TitleHome>
            <h1>KORNFELD GAMES</h1>
        </TitleHome>
        <Card className='text-center mb-3' style={{backgroundColor: '#351a9d70', color: 'white', fontFamily: 'Bungee'}}>
            <Card.Body>
                <h2 className='text-center mb-4'> Login</h2>
                <p>
                    To play you need to LOG IN to your account. 
                </p>
            </Card.Body>
            <div className='w-100 text-center mt-2 mb-1'>
                <Link to={'/login'}><Button variant='success'>LOG IN</Button></Link>
            </div>
        </Card>
        <Card className='text-center mb-3' style={{backgroundColor: '#351a9d70', color: 'white', fontFamily: 'Bungee'}}>

        <Card.Body>
            <h2 className='text-center mb-4'> Sign Up</h2>
            <p>
            If you still dont have an account please create one
            </p>

        </Card.Body>
        <div className='w-100 text-center mt-2 mb-1'>
        <Link to={'/signup'}><Button variant='success'>Create Account</Button></Link>
        </div>
        </Card>
    </>
  )
}



const TitleHome = styled.div`
  text-align: center;
  color: white;
  font-family: "Bungee", cursive;

`
