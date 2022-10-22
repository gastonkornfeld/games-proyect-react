


import React from 'react';
import players from './playersdata';
import { useAuth } from '../contexts/AuthContext';
import NotLogged from './NotLogged';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import Table from 'react-bootstrap/Table';


export default function LeaderBoard() {
  const {currentUser, logout} = useAuth();

  return (
    <>
        {currentUser && (
            <LeaderboardContainer>
                <LeaderboardHeading>Leaderboard</LeaderboardHeading>
                <FlexContainer>
                  <Table striped bordered hover variant="dark">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>User Name</th>
                        <th>Points</th>
                        <th>Avatar</th>
                      </tr>
                    </thead>
                    {players.map((element, i) => (
                      
                        
                        <tbody style={{alignItems: 'center'}}>
                          <tr>
                            <td>{i+1}</td>
                            <td>{element.user}</td>
                            <td>{element.points}</td>
                            <td style={{width: '50px'}}>
                              <div>
                                <img style={{width: '50px', height: '50px'}} src={element.avatar} alt={element.user}/>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      
                    ))}
                  </Table>

                </FlexContainer>

            </LeaderboardContainer>
        )}
    {!currentUser && <NotLogged />}
    </>
    
  )
}



const LeaderboardHeading = styled.div`
    color: #fff;
    font-size: 50px;
    text-align: center;
    font-family: "Bungee", san-serif;
    letter-spacing: 50px;
    margin-bottom: 30px;
 


`

const LeaderboardContainer = styled.div`
  background: linear-gradient(black, grey, blue, yellow, red, green, purple, olive, salmon, brown);
  padding: 30px 10px 10px 30px;
  text-align: center;
`


const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr 9fr;


`

const FlexContainer = styled.div`
  width: 60%;
  margin: 0 auto;

`