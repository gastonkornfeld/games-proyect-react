

import React from 'react'
import { Link } from 'react-router-dom'
import Board from './Board'
import styled from 'styled-components'
import Start from './Start'
import { useAuth } from '../../contexts/AuthContext'
import NotLogged from '../../components/NotLogged'


export default function BreakOutMenu() {
  const {currentUser} = useAuth();

  return (
    <>
      {currentUser && (
        <Link to="/breakout_start">
            
            <Start />
        </Link>
      )}
      {!currentUser && <NotLogged />}
        
    </>
        
  )
}


