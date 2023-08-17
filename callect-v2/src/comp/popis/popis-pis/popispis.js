import React from "react";
import "./popispis.css";
import Sidebar from "../../sidebar/sideBar";
import FCB from "../../../images/fcb.png";
import INSTA from "../../../images/insta.png";
import TWEET from "../../../images/twitter.png";

export default function Popispis() {
    return(
        <>
            <div className="ppspis">
                <Sidebar/>
                <div className="bj-np">
                   <h1 className="abt">PISKVORKY</h1> 
                </div>
                <div className="pk-pnp">
                   <h1 className="abt-2">Cieľ hry</h1> 
                </div>
                <h1 className="bjtxt">Ste X , váš priateľ (alebo počítač v tomto prípade) je O . Hráči sa striedajú pri umiestňovaní svojich značiek do prázdnych políčok.</h1>
                <h1 className="bjtxt">Víťazom je prvý hráč, ktorý získa 3 známky v rade (hore, dole, naprieč alebo diagonálne).</h1>
                <h1 className="bjtxt">Keď je všetkých 9 políčok plných, hra sa končí. Ak žiadny hráč nemá 3 známky v rade, hra končí remízou.</h1>
                <div className="pk-pnp">
                   <h1 className="abt-2">Vyhrať?</h1> 
                </div>
                <h1 className="bjtxt">Ak chcete poraziť počítač (alebo aspoň kravatu), musíte využiť trochu stratégie. Stratégia znamená zistiť, čo musíte urobiť, aby ste vyhrali.</h1>
                <h1 className="bjtxt">Súčasťou vašej stratégie je snažiť sa prísť na to, ako získať tri X s za sebou. Druhá časť sa snaží prísť na to, ako zabrániť počítaču, aby dostal tri O s za sebou.</h1>
                <h1 className="bjtxt">Po vložení X do štvorca sa začnete pozerať dopredu. Kde je najlepšie miesto pre vaše ďalšie X ? Pozeráte sa na prázdne štvorce a rozhodujete sa, ktoré z nich sú dobrou voľbou, ktoré vám umožnia urobiť tri X s za sebou.</h1>
                <h1 className="bjtxt">Musíte tiež sledovať, kde počítač umiestni svoje O . To by mohlo zmeniť to, čo budete robiť ďalej. Ak počítač dostane dve O za sebou, musíte vložiť ďalšie X do posledného prázdneho štvorca v tomto riadku, inak počítač vyhrá. Ste nútení hrať na určitom štvorci alebo prehrať hru.</h1>
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