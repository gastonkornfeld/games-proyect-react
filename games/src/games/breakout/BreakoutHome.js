import React from 'react'
import styled from 'styled-components'
import Board from "./Board.js"
import BreakOutMenu from './BreakOutMenu.js'
import { useAuth } from '../../contexts/AuthContext'
import NotLogged from '../../components/NotLogged.js'



function BreakoutHome() {
    const {currentUser} = useAuth();
    return (
        <Container style={{backgroundColor: currentUser ? 'salmon':'None' }}>
            {currentUser ? <Board /> : <NotLogged />}
        </Container>
    )
}

export default BreakoutHome


const Container = styled.div`
`