

import React, {useReducer,  useEffect} from 'react';
import styled from 'styled-components';
import { BOARD_ZISE, PLAYER_ONE, PLAYER_TWO, UNIT, GAME_ENDED, GAME_PLAYING, GAME_READY } from './config/const';
import Board from './Board';
import getCellKey from './utils/getCellKey';
import useInterval from './hooks/useInterval';
import playerCanChangeToDirection from './utils/playerCanChangeToDirection';
import sumCoordinates from './utils/sumCoordinates';
import getPlayableCells from './utils/getPlayableCells';
import Start from './Start';
import Result from '../breakout/Result';
import Button from '../../components/Button';

const players = [PLAYER_ONE, PLAYER_TWO];
const initialState = {
    players,
    playableCells: getPlayableCells(
        BOARD_ZISE,
        UNIT,
        players.map(player => getCellKey(player.position.x, player.position.y))
    ),
    gameStatus: GAME_READY,
}

function updateGame(game, action) {
    if (action.type === 'start') {
        return {...initialState, gameStatus: GAME_PLAYING}
    }

    if (action.type === 'restart') {
        return {...initialState, gameStatus: GAME_READY}
    }

    if (action.type === 'move') {
        const newPlayers = game.players.map(player => ({
            ...player,
            position: sumCoordinates(player.position, player.direction)
        }));


        const newPlayersWithCollision = newPlayers.map(player => {
            const myCellKey = getCellKey(player.position.x, player.position.y);
            return {
                ...player,
                hasDied: !game.playableCells.includes(myCellKey) ||
                newPlayers.filter(p => p.id !== player.id).map(p => getCellKey(p.position.x, p.position.y)).includes(myCellKey)
            }
        })



        const newOcupiedCells = game.players.map(player=> getCellKey(player.position.x, player.position.y)) 
        const playableCells = game.playableCells.filter(playableCell => {
            return !newOcupiedCells.includes(playableCell);
        })

        return {
            players: newPlayersWithCollision,
            playableCells: playableCells,
            gameStatus: newPlayersWithCollision.filter(player => player.hasDied). length === 0 ? GAME_PLAYING : GAME_ENDED
        };
    };
    if (action.type === 'changeDirection') {
        const newPlayers = game.players.map((player) => ({
            ...player,
            direction:
                player.keys[action.key] &&
                playerCanChangeToDirection(player.direction, player.keys[action.key])
                    ? player.keys[action.key]
                    : player.direction
        }));
        return {
            players: newPlayers,
            playableCells: game.playableCells,
            gameStatus: game.gameStatus,
        };
    }
}

export default function TronHomepage() {
    const [game, gameDispatch] = useReducer(updateGame, initialState);
    let result = null;
    const players = game.players;
    const diedPlayers = players.filter(player => player.hasDied);
    if(diedPlayers.length > 0) {
        console.log('playerdied', diedPlayers)
    }

    useInterval(function() {
        gameDispatch({type:"move"});
    }, game.gameStatus !== GAME_PLAYING ? null: 100);

    useEffect(function(){
        function handleKeyPress(event) {
            const key = `${event.keyCode}`;
            if( key === '13') {
                if (game.gameStatus === GAME_READY) {
                    handleStart();
                }
                if (game.gameStatus === GAME_ENDED) {
                    handleRestart();
                }
            }   

            gameDispatch({type: 'changeDirection', key});
        } 
        document.addEventListener('keydown', handleKeyPress);

        return function cleanUp() {
            document.removeEventListener('keydown', handleKeyPress)
        }
    }, []) 

    function handleStart() {
        gameDispatch({type: 'start'});
    }

    function handleRestart() {
        gameDispatch({type: 'restart'});

    }

    if (game.gameStatus === GAME_ENDED) {
        const winningPlayers = game.players.filter(player => !player.hasDied);
        if (winningPlayers.length === 0) {
            result = 'You guys did so well that it is a tie game.'
        } else {
            result = `The winner is the player number ${winningPlayers.map(player => `${player.id}`).join(',')}`; 
        }
    }
    return (
        <TronGameContainer>
            <Board players = {game.players} gameStatus={game.gameStatus}/>
            {game.gameStatus === GAME_READY && <Start onClick={handleStart}/>}
            {game.gameStatus === GAME_ENDED && <Result onClick={handleRestart} result={result}/>}

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