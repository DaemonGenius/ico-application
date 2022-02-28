import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";




import Navbar from "./components/Nav/Navbar";
import Home from "./pages/Home/Home";
import Governance from "./pages/Governance/Governance";
import Participate from "./pages/Participate/Participate";
import Tokenomics from "./pages/Tokenomics/Tokenomics";
import Staking from "./pages/Staking/Staking";
import YieldFarming from "./pages/YieldFarming/YieldFarming";
import DEX from "./pages/DEX/Dex";
import Kickstarter from "./pages/Kickstarter/Kickstarter";
import HealthCare from "./pages/HealthCare/HealthCare";
import Defi from "./pages/Defi/Defi";
import SupplyChain from "./pages/SupplyChain/SupplyChain";
import TradingPlatform from "./pages/TradingPlatform/TradingPlatform";
import NftPlatform from "./pages/NftPlatform/NftPlatform";

function App() {

  // store.dispatch();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/Governance" element={<Governance />} />
            <Route path="/Participate" element={<Participate />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="/Staking" element={<Staking />} />
            <Route path="/YieldFarming" element={<YieldFarming />} />
            <Route path="/Dex" element={<DEX />} />

            <Route path="/Kickstarter" element={<Kickstarter />} />
            <Route path="/Defi" element={<Defi />} />
            <Route path="/HealthCare" element={<HealthCare />} />
            <Route path="/SupplyChain" element={<SupplyChain />} />
            <Route path="/TradingPlatform" element={<TradingPlatform />} />
            <Route path="/NftPlatform" element={<NftPlatform />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
