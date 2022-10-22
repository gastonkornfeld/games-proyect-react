

import React, { useState } from 'react'
import styled from 'styled-components'
import Images from './Images'
import { shuffle } from 'lodash'

function Board() {
    // cards is use to loads the images and display it after with a map

    const [cards, setCards] = useState( shuffle([...Images, ...Images]));

// click is use to count the amount of clicks made by the user and display it

    const [clicks, setClicks] = useState(0);

    // won is use to set the win

    const [won, setWon] = useState(false);


//  active cards is use to follow the cards that the user is clicking and to flip them back

    const [activeCards, setActiveCards] = useState([]);

//  found pairs is use to hold flipped all the pairs already found.
    const [foundPairs, setFoundPairs] = useState([]);

    function flipCard(index) {
        if (won) {
            setClicks(0);
            setCards(shuffle([...Images, ...Images]))
            setFoundPairs([]);
            
            setWon(false);
            
        }
        if (activeCards.length === 0) {
            setActiveCards([index]);
        } else if (activeCards.length === 1){
            const firstIndex = activeCards[0];
            const secondeIndex = index;

            // before fliping back the cards need to check if they are the same
            // if they are the same then added to the list of pairs founded.
            setActiveCards([...activeCards, index]);
            if (cards[firstIndex] === cards[secondeIndex]) {
                if(foundPairs.length + 2 === cards.length) {
                    setWon(true);
                } 
                setFoundPairs([...foundPairs, firstIndex, secondeIndex])

                // here im checking if they win
                
            }
        }

        if (activeCards.length ===2) {
            setActiveCards([index]);
        }
        
        setClicks(clicks + 1);
    }


    return (
        <Container>
            <BoardContainer>
                { cards.map((card, index) => {
                    const flippedToFront = (activeCards.indexOf(index) !== -1) || foundPairs.indexOf(index) !== -1;
                    return (
                    <div className= {'card-outer ' + (flippedToFront ? 'flipped' : '')} 
                            onClick = {() => flipCard(index)}
                        >
                            <Card className='card'>
                                <CardFront>
                                    <img src = {card}></img>
                                </CardFront>
                                <CardBack></CardBack>
                            </Card>
                        </div> 
                    );
                    
                })}
                
                

                
            </BoardContainer>
            <InfoContainer>
                {won && (
                    <>You Finished. Click to start again.<br /> </>
                )}
                <Clicks>
                    Clicks: {clicks}
                </Clicks>
                <Pairs>
                    Found Pairs: {foundPairs.length/2} 
                </Pairs>
                
            </InfoContainer>
        </Container>
    )
}

export default Board


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    

`
const BoardContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    margin: auto;
    grid-template-columns: repeat(9, 1fr);
    padding: 20px;
    background-color: #123;
    width: calc(65vw - 20px);
    max-width: calc(100vw - 20px);

`
const Card = styled.div`
    
    border-radius: 5px;
    position: relative;
    
    width: 100%;
    height: 100%;
    transform: rotateY(180deg);
    transform-style: preserve-3d;
    transition: all 0.3s;

    ${'' /* .flipped {
        
        transform: rotateY(0);
    } */}
`

const CardFront = styled.div`

    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;

    img {
        display: block;
        max-width: 100%;

    }

`

const CardBack = styled.div`

    background-color: #468;
    transform: rotateY(180deg);
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
`

const InfoContainer = styled.div`
    padding: 20px 0;
    font-size: 18px;
    color: white;
    display: flex;
    justify-content: space-around;
`


const Clicks = styled.div`
    padding: 10px;
    color: cadetblue;
    font-weight: 900;
    font-family: 'Bungee';

`


const Pairs = styled.div`
    padding: 10px;
    color: cadetblue;
    font-weight: 900;
    font-family: 'Bungee';


`