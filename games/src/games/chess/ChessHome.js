


import React, {useState, useEffect, useRef} from 'react'
import ChessBoard from 'chessboardjsx'
import styled from 'styled-components'
import {Chess} from 'chess.js'
import { useAuth } from '../../contexts/AuthContext'
import NotLogged from '../../components/NotLogged'


export default function ChessHome() {
  const {currentUser} = useAuth();

  const [fen, setFen] = useState('start');

  let game = useRef(null);

  useEffect(() => {
    game.current = new Chess(); 
  }, [])
  const onDrop = ({sourceSquare, targetSquare}) => {
    let move = game.current.move({
      from: sourceSquare,
      to: targetSquare

    })

    // check for ilegal moves
    if(move === null) return
    
    // provide the fen string
    setFen(game.current.fen())
  }
  const startOver = () => {
    game.current.clear();
    game.current.reset();
    setFen('start');
  }
  return (
    <>
      {currentUser && (
        <ChessContainer>
          {
            game.current && game.current.game_over() ? <GameOver><h1>Game over</h1><br></br><button onClick={startOver}>Play Again</button></GameOver> : <span></span>
          }
          <ChessBoard areArrowsAllowed={true} position={fen} onDrop={onDrop} />
        </ChessContainer>
      )}
      {!currentUser && <NotLogged />}
    </>
    
  )
}


const ChessContainer= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;


`

const GameOver = styled.div`
  text-align: center;
  color: white;
  padding-right: 30px;

  button {
    padding:20px
  }
`