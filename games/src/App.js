
import './App.css';
import Header from "./components/Header"
import Home from './components/Home';
import BreakoutHome from './games/breakout/BreakoutHome';
import GameOfLifeHome from './games/gameoflife/GameOfLifeHome';
import MemoHome from './games/memogame/MemoHome';
import GamesList from './components/GamesList';
import BreakOutMenu from './games/breakout/BreakOutMenu';
import TronHomepage from './games/tron/TronHomepage';
import ChessHome from './games/chess/ChessHome';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ForgotPassword from './components/ForgotPassword';
import styled from 'styled-components';
import LeaderBoard from './components/LeaderBoard';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import UpdateProfile from './components/UpdateProfile';


function App() {

  return (
    <AuthProvider>
      <Router>
        <AplicationContainer>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/breakout" element={<BreakOutMenu />} />
            <Route path="/breakout_start" element={<BreakoutHome />} />
            <Route path="/gameoflife" element={<GameOfLifeHome />} />
            <Route path="/memogame" element={<MemoHome />} />
            <Route path="/games_list" element={<GamesList />} />
            <Route path="/tron_game_start" element={<TronHomepage />} />
            <Route path="/chess" element={<ChessHome />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/updateprofile" element={<UpdateProfile />} />
            <Route path="/leaderboard" element={<LeaderBoard />} />



          </Routes>
          
        </AplicationContainer>
      </Router>
    </AuthProvider>
  );
}

const AplicationContainer = styled.div`
  width: 100vw;
  height: 100vh;
  
  

`


export default App;
