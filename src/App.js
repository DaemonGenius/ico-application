import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Nav/Navbar";
import Home from "./pages/Home/Home";
import Participate from "./pages/Participate/Participate";
import Tokenomics from "./pages/Tokenomics/Tokenomics";
import Staking from "./pages/Staking/Staking";
import YieldFarming from "./pages/YieldFarming/YieldFarming";
import DEX from "./pages/DEX/Dex";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/Participate" element={<Participate />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="/Staking" element={<Staking />} />
            <Route path="/YieldFarming" element={<YieldFarming />} />
            <Route path="/Dex" element={<DEX />} />
          </Route>
        </Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
