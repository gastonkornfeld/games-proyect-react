

import React from 'react'
import { Link } from 'react-router-dom'
import Board from './Board'
import styled from 'styled-components'

export default function BreakOutMenu() {
  return (
    <>
        <BreakOutMenuContainer>
            <ButtonContainer>
                <Link to="/breakout_start">
                    <button>Start The Game</button>
                </Link>
            </ButtonContainer>
          
            
        </BreakOutMenuContainer>
    </>
        
  )
}



const BreakOutMenuContainer=styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 50px)
`

const ButtonContainer = styled.div`
    button {
        padding: 20px;
        font-family: verdana;
    }
`