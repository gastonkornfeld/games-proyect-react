
import React from 'react'
import styled from 'styled-components'

export default function Start({onClick}) {
    return (
        <StartContanier>
            <button onClick={onClick}>Start The Game</button>
            <div style={{textTransform: "uppercase", marginTop: "15px", fontSize: "15px"}}>
                Break all the bricks that you can. You have 5 lifes and each level will became more dificult.
            </div>
        </StartContanier>
    );
}
  
  
const StartContanier = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #FFF;
    background-color: #00000088;

    button {
        padding: 10px 30px;
        margin: 20px auto 0;
        font-size: 1.2rem;
        font-family: "Bungee", san-serif;
        cursor: pointer;
    }
`