

import React from 'react'
import styled from 'styled-components'

import Board from './Board'
import { useAuth } from '../../contexts/AuthContext'
import NotLogged from '../../components/NotLogged'



function MemoHome() {
    const {currentUser} = useAuth();

    return (
        <>
            {currentUser && (
                <Container>
                    <MemoGameTitle>
                        <h1 className="gameHeader">MEMORY GAME</h1>
                    </MemoGameTitle>
                    <Board />
                </Container>
            )}
            {!currentUser && <NotLogged />}

        </>
        
    )
}

export default MemoHome


const Container = styled.div`
    padding-top: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px solid red;
    background: url('./images/dbzwall.jpg');
    background-size: cover;


`

const MemoGameTitle = styled.div`
    text-align: center;


`
