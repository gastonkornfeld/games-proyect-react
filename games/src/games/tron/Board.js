
import React, {useEffect, useRef} from 'react'
import styled from 'styled-components';
import { UNIT, BOARD_ZISE, GAME_READY } from './config/const';



export default function Board({players, gameStatus}) {
    const canvasRef = useRef();
    useEffect(function() {
        if(gameStatus === GAME_READY) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            context.clearRect(0,0,BOARD_ZISE, BOARD_ZISE)
            context.beginPath();
            context.strokeStyle = '#777c51';
            for (let i = UNIT *2; i <= BOARD_ZISE; i += UNIT *2) {
                context.moveTo(i, 0);
                context.lineTo(i, BOARD_ZISE);
            }
            for (let i = UNIT *2; i <= BOARD_ZISE; i += UNIT *2) {
                context.moveTo(0, i);
                context.lineTo(BOARD_ZISE, i);
            }

            context.stroke()
            context.closePath();
        }
    }, [gameStatus]);


    useEffect(function() {
        const context = canvasRef.current.getContext('2d');
        // console.log(players);
        players.forEach(player => {
            context.fillStyle = player.color;
            context.fillRect(player.position.x, player.position.y, UNIT, UNIT);
        });
    }, [players])
    return (
        <>
            <canvas
                style={{
                    border: "1px solid #777",
                    outline:"1px solid #333",
                    outlineOffset: "5px",
                }}
                width={BOARD_ZISE}
                height={BOARD_ZISE}
                ref={canvasRef}
            />
            <InstructionsContainer>
                {players.map(player => (
                    <PlayerIntructions
                        className='instructions__player'
                        style={{color: player.color}}
                        key={player.id}
                    >
                        {`${player.id} : ${player.instructions}`}
                    </PlayerIntructions>
                ))}
            </InstructionsContainer>
        </>
)
}


const InstructionsContainer =styled.div`
    display:flex;
    justify-content: center;
    margin-top: 20px;
`
const PlayerIntructions =styled.div`
    padding-left: 10px;
    padding-right: 10px;
`
