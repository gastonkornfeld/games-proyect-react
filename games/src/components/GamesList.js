

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



export default function GamesList() {
  return (
    <GamesHomeContainer>
        <TitleContainer>
            <Title>
                <h3>Games List</h3>
            </Title>
        </TitleContainer>
        <GamesListContainer>
            <GamesListParagraph>
                <ListOfGames>
                    <SingleGameContainer>
                        <div>
                            <Link to="/breakout">
                                <img src= 'images/breakout.png'/> 
                                <Link to="/breakout">
                                    <span>BreakOut</span>
                                </Link>
                            </Link>
                            
                        </div>
                        
                    </SingleGameContainer>
                    <SingleGameContainer>
                        <div>
                            <a>
                                <img src= 'https://media.forgecdn.net/avatars/404/765/637615962119517296.png'/> 
                                <Link to="/gameoflife">
                                    <span>Game of Life</span>
                                </Link>
                            </a>
                        </div>
                        
                    </SingleGameContainer>
                    <SingleGameContainer>
                        <div>
                            <a>
                                <img src= 'images/goku.jpg'/> 
                                <Link to="/memogame">
                                    <span>DBZ Memory Game</span>
                                </Link>
                            </a>
                            
                        </div>
                        
                    </SingleGameContainer>
                    <SingleGameContainer>
                        <div>
                            <a>
                                <img src= 'images/cardgame.png'/> 
                                <Link to="/card_game_start">
                                    <span>Card War Game</span>
                                </Link>
                            </a>
                        </div>
                        
                    </SingleGameContainer>
                    
                </ListOfGames>
            </GamesListParagraph>
            <GamesListInfo>

            </GamesListInfo>
        </GamesListContainer>
    </GamesHomeContainer>
  )

}


const GamesHomeContainer = styled.div`
    background-color: white;
    height: 90vh;
    width: 90vw;
    margin: 0 auto;
`

const TitleContainer = styled.div`
    background-color: blue;
    width: 100%;
    height: 20%;
    display:flex;
    align-items: center;
    justify-content: center;

`
const Title = styled.div`
    background-color: red;
    letter-spacing: 16px;
    width: 50%;
    text-transform: uppercase;
    text-align: center;

`


const GamesListContainer = styled.div`
`

const GamesListParagraph = styled.div`
`

const GamesListInfo = styled.div``


const ListOfGames = styled.div`
    background-color: black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5px;
    height: 80%;
    div a {
        display:flex;
        align-items:center;
        padding: 0 12px;
        cursor:pointer;
        text-decoration: none;
        color: white;

        img {
            height: 40px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            text-transform: uppercase;
            position: relative;

            &:after {
                content: '';
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
                
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const SingleGameContainer = styled.div`
    margin: 10px;
    display:flex;
    align-items: center;
    justify-content: center;
    border: 2px solid white;
    height: 100px;
`