import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./comp/home/home";
import Popis from "./comp/popis/popis";
import PBJ from "./comp/popis/popis-bj/popisbj";
import PPK from "./comp/popis/popis-pk/popispk";
import PSLT  from "./comp/popis/popis-slt/popisslt";
import PPIS from "./comp/popis/popis-pis/popispis";
import PGM from "./comp/popis/popis-gm/popisgm";
import BJG from "./games/blackjack/components/BlackJack.tsx"
import GMF from "./games/2048/2048";
import Kontakt from "./comp/kontakt/kontakt";
import Karty from "./games/vyber/karty/karty";
import Klasika from "./games/vyber/klasika/klasika";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>

          <Route path="/popis" element={<Popis/>}></Route>
          <Route path="/popis-blackjack" element={<PBJ/>}></Route>
          <Route path="/popis-poker" element={<PPK/>}></Route>
          <Route path="/popis-solitaire" element={<PSLT/>}></Route>
          <Route path="/popis-piskvorky" element={<PPIS/>}></Route>
          <Route path="/popis-2048" element={<PGM/>}></Route>

          <Route path="/BlackJack" element={BJG}></Route>
          <Route path="/gm2048" element={<GMF/>}></Route>

          <Route path="/kontakt" element={<Kontakt/>}></Route>
          <Route path="/karty" element={<Karty/>}></Route>
          <Route path="/klasika" element={<Klasika/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
