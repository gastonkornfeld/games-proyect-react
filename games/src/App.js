
import './App.css';
import Header from "./components/Header"
import BreakoutHome from './games/breakout/BreakoutHome';
import GameOfLifeHome from './games/gameoflife/GameOfLifeHome';
import MemoHome from './games/memogame/MemoHome';

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
          <Route path="/" element={<h1 style={{color: "white", textAlign: "center"}}>Home</h1>} />
          
          <Route path="/breakout" element={<BreakoutHome />} />
          <Route path="/gameoflife" element={<GameOfLifeHome />} />
          <Route path="/memogame" element={<MemoHome />} />
        </Routes>

           
          
        
      
      
    </Router>
  );
}

export default App;
