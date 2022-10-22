import React from 'react'
import styled from 'styled-components'
import Board from "./Board.js"
import BreakOutMenu from './BreakOutMenu.js'
import { useAuth } from '../../contexts/AuthContext'
import NotLogged from '../../components/NotLogged.js'



function BreakoutHome() {
    const {currentUser} = useAuth();
    return (
        <Container>
            {currentUser ? <Board /> : <NotLogged />}
        </Container>
    )
}

export default BreakoutHome


const Container = styled.div`
    background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4foCpdt3mq7vkNylfq0Z_VqWH6beoy8o5qA&usqp=CAU');
    background-size: 20%;

`