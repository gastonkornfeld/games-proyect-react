
import './App.css';
import Header from "./components/Header"
import BreakoutHome from './games/breakout/BreakoutHome';

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
          <Route path="/" element={<h1>Home</h1>} />
          
          <Route path="/breakout" element={<BreakoutHome />} />
        </Routes>

           
          
        
      
      
    </Router>
  );
}

export default App;
