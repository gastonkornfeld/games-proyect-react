
import React, {useEffect, useRef} from 'react'
import { UNIT, BOARD_ZISE } from './config/const';



export default function Board({players}) {
    const canvasRef = useRef();
    useEffect(function() {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.beginPath();
        context.strokeStyle = '#001900';
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
    }, []);


    useEffect(function() {
        const context = canvasRef.current.getContext('2d');
        console.log(players);
        players.forEach(player => {
            context.fillStyle = player.color;
            context.fillRect(player.position.x, player.position.y, UNIT, UNIT);
        });
    }, [players])
    return (
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
)
}
