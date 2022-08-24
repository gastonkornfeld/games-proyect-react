
import './App.css';
import Header from "./components/Header"
import Home from './components/Home';
import BreakoutHome from './games/breakout/BreakoutHome';
import GameOfLifeHome from './games/gameoflife/GameOfLifeHome';
import MemoHome from './games/memogame/MemoHome';
import GamesList from './components/GamesList';
import BreakOutMenu from './games/breakout/BreakOutMenu';
import CardwordHome from './games/cardwar/CardwordHome';
import Footer from './components/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/breakout" element={<BreakOutMenu />} />
          <Route path="/gameoflife" element={<GameOfLifeHome />} />
          <Route path="/memogame" element={<MemoHome />} />
          <Route path="/games_list" element={<GamesList />} />
          <Route path="/breakout_start" element={<BreakoutHome />} />
          <Route path="/card_game_start" element={<CardwordHome />} />



        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
