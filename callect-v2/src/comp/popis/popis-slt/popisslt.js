import React from "react";
import "./popisslt.css";
import Sidebar from "../../sidebar/sideBar";
import FCB from "../../../images/fcb.png";
import INSTA from "../../../images/insta.png";
import TWEET from "../../../images/twitter.png";

export default function Popisslt() {
    return(
        <>
            <div className="ppsslt">
                <Sidebar/>
                <div className="bj-np">
                   <h1 className="abt">SOLITAIRE</h1> 
                </div>
                <div className="pk-pnp">
                   <h1 className="abt-2">Cieľ hry</h1> 
                </div>
                <h1 className="bjtxt">Prvým cieľom je uvoľniť a zahrať do pozície určité karty, aby sa vybudoval každý základ, v poradí a v obleku, od esa po kráľa. Konečným cieľom je postaviť celý balík na základoch, a ak sa to podarí, hra Solitaire je vyhratá.</h1>
                <h1 className="bjtxt">Počiatočné pole môže byť zmenené "budovou" - prenosom kariet medzi kartami lícom nahor v tableau. Niektoré karty tableau je možné hrať naraz, zatiaľ čo iné sa nemusia hrať, kým nie sú odstránené určité blokovacie karty. Napríklad zo siedmich kariet smerujúcich nahor v tableau, ak je jedna deviatka a druhá desať, môžete preniesť deväť na vrchol desiatich, aby ste začali stavať túto hromadu postupne. Keďže ste presunuli deväť z jednej zo siedmich kôpok, odblokovali ste kartu lícom nadol; Táto karta sa dá otočiť a teraz je v hre.</h1>
                <h1 className="bjtxt">Keď prenášate karty v tableau a začínate budovať sekvencie, ak odhalíte eso, eso by malo byť umiestnené v jednej zo základových kôp. Základy sa stavajú podľa obleku a postupne od esa ku kráľovi.
                                      Pokračujte v prenose kariet na seba v tabuľke v poradí. Ak už nemôžete presunúť karty lícom nahor, môžete využiť hromadu zásob prevrátením prvej karty. Túto kartu je možné hrať v základoch alebo tableau. Ak nemôžete hrať kartu v tableau alebo základových hromadách, presuňte kartu na hromadu odpadu a otočte ďalšiu kartu v hromade zásob.</h1>
                <h1 className="bjtxt">Ak sa voľné miesto v tableau vytvorí odstránením kariet inde, nazýva sa to "priestor" a má veľký význam pri manipulácii s tableau. Ak sa vytvorí priestor, môže byť vyplnený iba kráľom. Naplnenie priestoru kráľom by mohlo potenciálne odblokovať jednu z kariet lícom nadol v inej hromade v tableau. Pokračujte v prenose kariet v tableau a prineste karty do hry z hromady zásob, kým nie sú všetky karty postavené v sekvenciách oblekov v zakladateľskýchn hromadách, aby ste vyhrali!</h1>
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