

import React from 'react'
import styled from 'styled-components'

import Board from './Board'


function MemoHome() {
    return (
        <Container>
            <MemoGameTitle>
                <h1 className="gameHeader">MEMORY GAME</h1>
            </MemoGameTitle>
            <Board />
            

            
            
        </Container>
    )
}

export default MemoHome


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

`

const MemoGameTitle = styled.div`
    text-align: center;


`
