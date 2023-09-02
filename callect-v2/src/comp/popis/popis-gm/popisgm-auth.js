import React from "react";
import "./popisgm.css";
import FCB from "../../../images/fcb.png";
import INSTA from "../../../images/insta.png";
import TWEET from "../../../images/twitter.png";
import SidebarAuth from "../../sidebar/sideBarauth";

export default function PopisgmAuth() {
    return(
        <>
            <div className="ppsgm">
                <SidebarAuth/>
                <div className="gm-np">
                   <h1 className="abt">2048</h1> 
                </div>
                <div className="pk-pnp">
                   <h1 className="abt-2">Cieľ hry</h1> 
                </div>
                <h1 className="bjtxt">1. Začnite zatlačením dlaždíc do jedného rohu štvorca. Umiestnenie dlaždíc k sebe v jednom rohu vám dáva väčšiu šancu presunúť dlaždice s rovnakým číslom bližšie k sebe. Môžete použiť jeden zo štyroch rohov poľa, vľavo hore, vpravo hore, vľavo dole a vpravo dole. Štvorec na okraji rohu, ktorý ste vybrali, by mal obsahovať najvyššie číslo, aby vám neprekážal pri kombinovaní iných dlaždíc.</h1>
                <h1 className="bjtxt">2. Nikdy neumiestňujte dlaždice s vysokými číslami do stredu škatule. Ak tak urobíte, bude pre vás ťažšie kombinovať iné dlaždice, pretože vaša dlaždica s vyšším číslom na nej zablokuje ostatné dlaždice s nižšími číslami, ktoré sa zobrazujú.</h1>
                <h1 className="bjtxt">3. Začnite s dlaždicami s malými číslami na nich. Nechajte dlaždice s vysokými číslami zostať v jednom rohu, zatiaľ čo ich kombinujete s menšími číslami. Potom sa skóre časom zvýši.</h1>
                <h1 className="bjtxt">4. Pomocou políčok, ktoré sú viditeľné vedľa rohu, ktorý používate, ponechajte dlaždicu s najvyšším číslom, aby ste ich mohli ľahšie skombinovať.</h1>
                <h1 className="bjtxt">5. Neponáhľajte sa s kombinovaním dlaždíc s vysokými hodnotami. To by mohlo rozptýliť dlaždice, ktoré držíte stranou, a sťažiť kombinovanie veľkého množstva dlaždíc. Pokračujte v kombinovaní štvorcov s malými hodnotami, kým nedosiahnete svoj cieľ.</h1>
                <h1 className="bjtxt">6. Veľa cvičte. Skúsenosť je jedným z najväčších mentorov, akých človek môže mať. Veľa hrania hry vám dá veľa praxe a umožní vám vyvinúť rôzne stratégie, ako dosiahnuť vysoké skóre. Buďte trpezliví a nechajte svoje skúsenosti doviesť k väčším úspechom v hre.</h1>
                <div className="botm-6">
                    <a href="https://www.facebook.com/Nah0dakSK"><img id="fcb" alt="" src={FCB}></img></a>
                    <a href="https://instagram.com/nah0daksk?igshid=MzNINGNkZWQ4Mg=="><img id="insta" alt="" src={INSTA}></img></a>
                    <a href="https://twitter.com/nah0dak?t=r3GnEl8I479rVfDZDOW0gQ&s=09"><img id="twitter" alt="" src={TWEET}></img></a>
                    <p className="name">NahOdakSK</p>
                </div>
            </div>
        </>
    )
}