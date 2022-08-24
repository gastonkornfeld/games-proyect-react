import React from 'react'
import styled from 'styled-components'
import Board from "./Board.js"
import BreakOutMenu from './BreakOutMenu.js'


function BreakoutHome() {
    return (
        <Container>
            <Board />
        </Container>
    )
}

export default BreakoutHome


const Container = styled.div`
    background-color: salmon;
`