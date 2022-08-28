





import React from 'react'
import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import DeckOfCards from './Deck';

const newdeck = [];

function setInitialDeck() {
  const newdeck = new DeckOfCards();
  newdeck.shuffle();
  return newdeck;
};
function starGame() {

  const deckMidPoint = Math.ceil( newdeck.numberOfCards / 2);
  console.log(deckMidPoint);
}






export default function CardwordHome() {
  const [newDeck, setNewDeck] = useState(setInitialDeck());
  const [deckMidPoint, setDeckMidPoint] = useState(Math.ceil( newDeck.numberOfCards / 2))
  const [playerDeck, setPlayerDeck] = useState(new DeckOfCards(newDeck.cards.slice(0, deckMidPoint)));
  const [computerDeck, setComputerDeck] = useState(new DeckOfCards(newDeck.cards.slice(deckMidPoint, newDeck.numberOfCards)));
  const [gamePlaying, setGamePlaying] = useState(false);
  const [playerCard, setPlayerCard] = useState(playerDeck.pop());
  const [computerCard, setComputerCard] = useState(computerDeck.pop());
  const [decideWinner, setDecideWinner] = useState(playerCard.value > computerCard.value);

  const setWiner = () => {

  }
  return (
    <CardGameContainer>
      <ComputerDeck>
        {computerDeck.numberOfCards}
      </ComputerDeck>
      <ComputerActualCard style = {{color:newDeck.cards[0].color}}>
      {gamePlaying && (
        <div>{computerCard.value}{computerCard.suit}</div>
      )}

      
      </ComputerActualCard>
      <WinnerContainer>
        you lose
      </WinnerContainer>
      <PlayerDeck>
        {playerDeck.numberOfCards}
      </PlayerDeck>
      <ComputerActualCard style = {{color:newDeck.cards[0].color}}>
        {gamePlaying && (
          <div>{playerCard.value}{playerCard.suit}</div>
        )}
      </ComputerActualCard>
      <button onClick={()=>{

        setGamePlaying(!gamePlaying);
        console.log(decideWinner);
        if(decideWinner) {
          setComputerDeck(new DeckOfCards(computerDeck.deleteCard()));
          console.log(computerDeck);
          // setPlayerDeck();
        }
        
      }}>
        {!gamePlaying? "Play": "Next Round"}
      </button>
    </CardGameContainer>
    
  )
}




const CardGameContainer = styled.div`
  background-color: white;
  height: 80vh;
  width: 80vw;
  margin: 0 auto;
  ${'' /* display: flex; */}
  ${'' /* flex-direction: column; */}
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(2, 4rem);
  grid-template-rows: 7rem 2rem 7rem;
  gap: .5rem;
  cursor:pointer;
  justify-content: center;
  padding-top: 1rem;
`

const ComputerActualCard = styled.div`
  height:100%;
  width:100%;
  border: 1px solid black;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border-radius: .5rem;
`


const ComputerDeck =styled.div`
  height:100%;
  width:100%;
  border: 1px solid black;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  border-radius: .5rem;
  color: white;
  background-color: green;
  user-select: none;
`

const PlayerDeck =styled.div`
  height:100%;
  width:100%;
  border: 1px solid black;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  border-radius: .5rem;
  color: white;
  background-color: blue;
  user-select: none;


`
const WinnerContainer = styled.div`
  grid-column: span 2;
  display:flex;
  justify-content: center;
  align-items: center;
`