

import React, {useState} from 'react'
import styled from 'styled-components'
import { useAuth } from '../contexts/AuthContext'
import { Button } from 'react-bootstrap'


import { Link, useNavigate } from 'react-router-dom'


export default function Footer() {
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
      alert('failed to log out');
      }

  }
  return (
    <FooterContainer>
      

      <footer class="footer-distributed">

        <div class="footer-right">

          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-github"></i></a>

        </div>

        <div class="footer-left">

          <p class="footer-links">
            <Link to='./'><a class="link-1" href="#">Home</a></Link>

            <a href="#"></a>

            <a href="#">Contact Us</a>

            <a href="#">Portfolio</a>


            <span onClick={handleLogOut}><a href="#">Log Out</a></span>
          </p>

          <p>KORNFELD GAMES &copy; 2022</p>
        </div>

      </footer>
    </FooterContainer>
  )
}


const FooterContainer = styled.div`
  bottom: 0;
  color:white;
  width: 100%;
  
`
