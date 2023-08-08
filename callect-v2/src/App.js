import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./comp/home/home";
import Popis from "./comp/popis/popis";
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
          <Route path="/kontakt" element={<Kontakt/>}></Route>
          <Route path="/karty" element={<Karty/>}></Route>
          <Route path="/klasika" element={<Klasika/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
