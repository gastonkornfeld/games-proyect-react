

import React from 'react'
import styled from 'styled-components'
export default function Result({result, onClick}) {
  return (
    <PlayerInfo>
        <h1>{result}</h1>
        <button onClick={onClick}>
            Play Again
        </button>
    </PlayerInfo>
  )
}


const PlayerInfo = styled.div`
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
