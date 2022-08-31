

import React from 'react'
import styled from 'styled-components'

export default function Start({onClick}) {
  return (
    <StartContanier>
        <button onClick={onClick}>Start The Game</button>
        <div>
            This is the typicall game where you have to grow and grow but dont hit yourself.
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