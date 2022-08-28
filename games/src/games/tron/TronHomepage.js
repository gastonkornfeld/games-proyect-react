

import React, {useReducer} from 'react';
import styled from 'styled-components';
import { PLAYER_ONE, PLAYER_TWO } from './config/const';
import Board from './Board';
import { PagesSharp } from '@material-ui/icons';
import useInterval from './hooks/useInterval';
import sumCoordinates from './utils/sumCoordinates';


const initialState = [
    PLAYER_ONE, PLAYER_TWO
];

function updateGame(players, action) {
    if (action.type == 'move') {
        const newPlayers = players.map(player => ({
            ...player,
            position: sumCoordinates(player.position, player.direction)
        }));
        return newPlayers;
    };
}

export default function TronHomepage() {
    const [players, gameDispatch] = useReducer(updateGame, initialState);
    useInterval(function() {
        gameDispatch({type:"move"});
    }, 1000);
    return (
        <TronGameContainer>
            <Board players = {players}/>
        </TronGameContainer>
    
    )
}

const TronGameContainer =styled.div`
    font-family: "Bungee", san-serif;
    color: white;
    background-color: #000;
    text-align: center;
    text-transform: uppercase;
`