

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import NotLogged from './NotLogged';
import Footer from './Footer';




export default function GamesList() {
  const {currentUser, logout} = useAuth();

  return (
    <>
        {currentUser && (
            <>
                <GamesHomeContainer className='mt-4 mb-4 bg-dark'>
                    <TitleContainer>
                        <Title>
                            <h3>Games</h3>
                        </Title>
                    </TitleContainer>
                    <GamesListContainer>
                        <GamesListParagraph>
                            <ListOfGames>
                                <SingleGameContainer style={{backgroundColor: '#198754'}}>
                                    <div>
                                            <Link to="/breakout">
                                            <img src= 'images/breakout.png'/> 
                                                <span>BreakOut</span>
                                            </Link>
                                        
                                    </div>
                                    
                                </SingleGameContainer>
                                <SingleGameContainer style={{backgroundColor: 'brown'}}>
                                    <div>
                                        <a>
                                            <Link to="/gameoflife">

                                            <img src= 'https://media.forgecdn.net/avatars/404/765/637615962119517296.png'/> 
                                                <span>Game of Life</span>
                                            </Link>
                                        </a>
                                    </div>
                                    
                                </SingleGameContainer>
                                <SingleGameContainer style={{backgroundColor: '#198754'}}>
                                    <div>
                                        <a>
                                            <Link to="/memogame">

                                            <img src= 'images/goku.jpg'/> 
                                                <span>DBZ Memory Game</span>
                                            </Link>
                                        </a>
                                        
                                    </div>
                                    
                                </SingleGameContainer>
                                <SingleGameContainer style={{backgroundColor: 'brown'}}>
                                    <div>
                                        <a>
                                            <Link to="/tron_game_start">
                                            <img src= 'images/cardgame.png'/> 
                                            
                                                <span>Card War Game</span>
                                            </Link>
                                        </a>
                                    </div>
                                    
                                </SingleGameContainer>
                                <SingleGameContainer style={{backgroundColor: '#198754'}}>
                                    <div>
                                        <a>
                                            <Link to="/tron_game_start">
                                                <span>Tron</span> <br/>
                                                <img src= 'images/tron.png'/>
                                            
                                                
                                            </Link>
                                        </a>
                                    </div>
                                    
                                </SingleGameContainer>
                                <SingleGameContainer style={{backgroundColor: 'brown'}}>
                                    <div>
                                        <a>
                                            <Link to="/chess">
                                                <img src= 'https://flyclipart.com/thumb2/chess-piece-king-royalty-free-vector-clip-art-illustration-619344.png'/>
                                            
                                                <span>Two Players Chess</span>
                                            </Link>
                                        </a>
                                    </div>
                                    
                                </SingleGameContainer>
                                <SingleGameContainer style={{backgroundColor: '#198754'}}>
                                    <div>
                                        <a>
                                            <Link to="/chess">
                                                <img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSscg4mHBL-d_7w5wGAjb-HPEBt6NhEr2Bp7g&usqp=CAU'/>
                                            
                                                <span>Snake Game</span>
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
                <Footer />
            </>

        )}
        {!currentUser && <NotLogged />}
    </>
    
  )

}


const GamesHomeContainer = styled.div`
    max-height: 100vh;
    min-height: 60vh;
    width: 80vw;
    margin: 0 auto;
    font-family: "Bungee", san-serif;
`

const TitleContainer = styled.div`
    width: 100%;
    height: 12vh;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 5%;
    color: white;
`
const Title = styled.div`
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
            margin-left: 5px;

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