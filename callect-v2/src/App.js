import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./comp/home/home";
import HomeP from "./comp/home/home-auth.js";

import Popis from "./comp/popis/popis";
import Popis2 from "./comp/popis/popis-auth.js";

import PBJ from "./comp/popis/popis-bj/popisbj";
import PPK from "./comp/popis/popis-pk/popispk";
import PSLT  from "./comp/popis/popis-slt/popisslt";
import PPIS from "./comp/popis/popis-pis/popispis";
import PGM from "./comp/popis/popis-gm/popisgm";

import PBJ2 from "./comp/popis/popis-bj/popisbj-auth";
import PPK2 from "./comp/popis/popis-pk/popispk-auth";
import PSLT2  from "./comp/popis/popis-slt/popisslt-auth";
import PPIS2 from "./comp/popis/popis-pis/popispis-auth";
import PGM2 from "./comp/popis/popis-gm/popisgm-auth";

import PVH from "./games/piskvorky/PlayerChoose";
import P1P from "./games/piskvorky/1-player/OneTTT";
import P2P from "./games/piskvorky/2-player/TTT";

import PVH2 from "./games/piskvorky/PlayerChoose-auth";
import P1P2 from "./games/piskvorky/1-player/OneTTT-auth";
import P2P2 from "./games/piskvorky/2-player/TTT-auth";

import SLT from "./games/solitaire/solitaire-game/solitaire";
import PKR from "./games/poker/poker-game/pokerJH";
import GMF from "./games/2048/2048";
import BLJ from "./games/blackjack/components/App.tsx";

import SLT2 from "./games/solitaire/solitaire-game/solitaire-auth";
import PKR2 from "./games/poker/poker-game/pokerJH-auth";
import GMF2 from "./games/2048/2048-auth";
import BLJ2 from "./games/blackjack/components/App-auth.tsx";

import Kontakt from "./comp/kontakt/kontakt";
import Karty from "./games/vyber/karty/karty";
import Klasika from "./games/vyber/klasika/klasika";

import Kontakt2 from "./comp/kontakt/kontakt-auth";
import Karty2 from "./games/vyber/karty/karty-auth";
import Klasika2 from "./games/vyber/klasika/klasika-auth";

import HomeE from "./anglicky/comp/home/home";
import HomeEP from "./anglicky/comp/home/home-auth.js";

import PopisE from "./anglicky/comp/popis/popis";
import Popis2E from "./anglicky/comp/popis/popis-auth.js";

import PBJE from "./anglicky/comp/popis/popis-bj/popisbj";
import PPKE from "./anglicky/comp/popis/popis-pk/popispk";
import PSLTE  from "./anglicky/comp/popis/popis-slt/popisslt";
import PPISE from "./anglicky/comp/popis/popis-pis/popispis";
import PGME from "./anglicky/comp/popis/popis-gm/popisgm";

import PBJ2E from "./anglicky/comp/popis/popis-bj/popisbj-auth";
import PPK2E from "./anglicky/comp/popis/popis-pk/popispk-auth";
import PSLT2E  from "./anglicky/comp/popis/popis-slt/popisslt-auth";
import PPIS2E from "./anglicky/comp/popis/popis-pis/popispis-auth";
import PGM2E from "./anglicky/comp/popis/popis-gm/popisgm-auth";

import PVHE from "./anglicky/games/piskvorky/PlayerChoose";
import P1PE from "./anglicky/games/piskvorky/1-player/OneTTT";
import P2PE from "./anglicky/games/piskvorky/2-player/TTT";

import PVH2E from "./anglicky/games/piskvorky/PlayerChoose-auth";
import P1P2E from "./anglicky/games/piskvorky/1-player/OneTTT-auth";
import P2P2E from "./anglicky/games/piskvorky/2-player/TTT-auth";

import SLTE from "./anglicky/games/solitaire/solitaire-game/solitaire";
import PKRE from "./anglicky/games/poker/poker-game/pokerJH";
import GMFE from "./anglicky/games/2048/2048";
import BLJE from "./anglicky/games/blackjack/components/App.tsx";

import SLT2E from "./anglicky/games/solitaire/solitaire-game/solitaire-auth";
import PKR2E from "./anglicky/games/poker/poker-game/pokerJH-auth";
import GMF2E from "./anglicky/games/2048/2048-auth";
import BLJ2E from "./anglicky/games/blackjack/components/App-auth.tsx";

import KontaktE from "./anglicky/comp/kontakt/kontakt";
import KartyE from "./anglicky/games/vyber/karty/karty";
import KlasikaE from "./anglicky/games/vyber/klasika/klasika";

import Kontakt2E from "./anglicky/comp/kontakt/kontakt-auth";
import Karty2E from "./anglicky/games/vyber/karty/karty-auth";
import Klasika2E from "./anglicky/games/vyber/klasika/klasika-auth";

import Auth from "./comp/auth/auth.js";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Auth/>}></Route>
          <Route path="/domov" element={<Home/>}></Route>
          <Route path="/domov2" element={<HomeP/>}></Route>

          <Route path="/popis" element={<Popis/>}></Route>
          <Route path="/popis-blackjack" element={<PBJ/>}></Route>
          <Route path="/popis-poker" element={<PPK/>}></Route>
          <Route path="/popis-solitaire" element={<PSLT/>}></Route>
          <Route path="/popis-piskvorky" element={<PPIS/>}></Route>
          <Route path="/popis-2048" element={<PGM/>}></Route>

          <Route path="/popis2" element={<Popis2/>}></Route>
          <Route path="/popis-blackjack2" element={<PBJ2/>}></Route>
          <Route path="/popis-poker2" element={<PPK2/>}></Route>
          <Route path="/popis-solitaire2" element={<PSLT2/>}></Route>
          <Route path="/popis-piskvorky2" element={<PPIS2/>}></Route>
          <Route path="/popis-2048-2" element={<PGM2/>}></Route>

          <Route path="/piskvorky-vyber_hraca" element={<PVH/>}></Route>
          <Route path="/piskvorky-1-hrac" element={<P1P/>}></Route>
          <Route path="/piskvorky-2-hraci" element={<P2P/>}></Route>

          <Route path="/piskvorky-vyber_hraca2" element={<PVH2/>}></Route>
          <Route path="/piskvorky-1-hrac2" element={<P1P2/>}></Route>
          <Route path="/piskvorky-2-hraci2" element={<P2P2/>}></Route>

          <Route path="/solitaire" element={<SLT/>}></Route>
          <Route path="/poker" element={<PKR/>}></Route>
          <Route path="/gm2048" element={<GMF/>}></Route>
          <Route path="/blackjack" element={<BLJ/>}></Route>

          <Route path="/solitaire2" element={<SLT2/>}></Route>
          <Route path="/poker2" element={<PKR2/>}></Route>
          <Route path="/gm2048-2" element={<GMF2/>}></Route>
          <Route path="/blackjack2" element={<BLJ2/>}></Route>

          <Route path="/kontakt" element={<Kontakt/>}></Route>
          <Route path="/karty" element={<Karty/>}></Route>
          <Route path="/klasika" element={<Klasika/>}></Route>

          <Route path="/kontakt2" element={<Kontakt2/>}></Route>
          <Route path="/karty2" element={<Karty2/>}></Route>
          <Route path="/klasika2" element={<Klasika2/>}></Route>

          <Route path="/domov-eng" element={<HomeE/>}></Route>
          <Route path="/domov2-eng" element={<HomeEP/>}></Route>

          <Route path="/popis-eng" element={<PopisE/>}></Route>
          <Route path="/popis-blackjack-eng" element={<PBJE/>}></Route>
          <Route path="/popis-poker-eng" element={<PPKE/>}></Route>
          <Route path="/popis-solitaire-eng" element={<PSLTE/>}></Route>
          <Route path="/popis-piskvorky-eng" element={<PPISE/>}></Route>
          <Route path="/popis-2048-eng" element={<PGME/>}></Route>

          <Route path="/popis2-eng" element={<Popis2E/>}></Route>
          <Route path="/popis-blackjack2-eng" element={<PBJ2E/>}></Route>
          <Route path="/popis-poker2-eng" element={<PPK2E/>}></Route>
          <Route path="/popis-solitaire2-eng" element={<PSLT2E/>}></Route>
          <Route path="/popis-piskvorky2-eng" element={<PPIS2E/>}></Route>
          <Route path="/popis-2048-2-eng" element={<PGM2E/>}></Route>

          <Route path="/piskvorky-vyber_hraca-eng" element={<PVHE/>}></Route>
          <Route path="/piskvorky-1-hrac-eng" element={<P1PE/>}></Route>
          <Route path="/piskvorky-2-hraci-eng" element={<P2PE/>}></Route>

          <Route path="/piskvorky-vyber_hraca2-eng" element={<PVH2E/>}></Route>
          <Route path="/piskvorky-1-hrac2-eng" element={<P1P2E/>}></Route>
          <Route path="/piskvorky-2-hraci2-eng" element={<P2P2E/>}></Route>

          <Route path="/solitaire-eng" element={<SLTE/>}></Route>
          <Route path="/poker-eng" element={<PKRE/>}></Route>
          <Route path="/gm2048-eng" element={<GMFE/>}></Route>
          <Route path="/blackjack-eng" element={<BLJE/>}></Route>

          <Route path="/solitaire2-eng" element={<SLT2E/>}></Route>
          <Route path="/poker2-eng" element={<PKR2E/>}></Route>
          <Route path="/gm2048-2-eng" element={<GMF2E/>}></Route>
          <Route path="/blackjack2-eng" element={<BLJ2E/>}></Route>

          <Route path="/kontakt-eng" element={<KontaktE/>}></Route>
          <Route path="/karty-eng" element={<KartyE/>}></Route>
          <Route path="/klasika-eng" element={<KlasikaE/>}></Route>

          <Route path="/kontakt2-eng" element={<Kontakt2E/>}></Route>
          <Route path="/karty2-eng" element={<Karty2E/>}></Route>
          <Route path="/klasika2-eng" element={<Klasika2E/>}></Route>
        </Routes>
      </Router>
    </>
  )};

export default App;