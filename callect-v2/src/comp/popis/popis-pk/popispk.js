import React from "react";
import "./popispk.css";
import Sidebar from "../../sidebar/sideBar";
import PKH from "../../../images/pk-hnd.png";
import FCB from "../../../images/fcb.png";
import INSTA from "../../../images/insta.png";
import TWEET from "../../../images/twitter.png";


export default function Popispk() {
    return(
        <>
            <div className="ppspk">
                <Sidebar/>
                <div className="pk-np">
                   <h1 className="abt">POKER</h1> 
                </div>
                <div className="pk-pnp">
                   <h1 className="abt-2">Cieľ hry</h1> 
                </div>
                <h1 className="bjtxt">je vytvoriť najlepšiu kombináciu piatich kariet pomocou kombinácie dvoch jamkových kariet (na ruke) a piatich komunitných kariet (na stole). Prvé kolo začína tým, že každý hráč dostane dve jamkové karty, ktoré sú rozdané lícom nadol a sú viditeľné iba hráčom, ktorý ich drží až do konca listu.</h1>
                <h1 className="bjtxt">Keď každý hráč dostane svoje dve jamkové karty, začína sa stávkové kolo pred flopom. Potom predajca položí na stôl prvé tri z piatich komunitných kariet. Tieto tri karty sú lícom nahor a známe ako prepadák.</h1>
                <h1 className="bjtxt">Po tom, čo flop zasiahne hraciu plochu, začína ďalšie stávkové kolo. Po flop stávkovom kole nasleduje ďalšia komunitná karta (tiež lícom nahor), ktorá zasiahne hraciu plochu, známu ako ťah.</h1>
                <h1 className="bjtxt">Po kolo stávok nasleduje krupiér, ktorý vloží piatu kartu na hraciu plochu, známu ako rieka. Obchodovanie s riekou začína posledné kolo stávok, po ktorom všetci zostávajúci hráči ukážu svoje jamkové karty. Vyhráva hráč s najlepšou kombináciou kariet s piatimi kartami, ktorý používa ľubovoľnú kombináciu jamkových kariet a komunitných kariet.</h1>
                <div className="pk-pnp">
                   <h1 className="abt-2">Rozdania</h1> 
                </div>
                <h1 className="bjtxt">Royal Flush (kráľovské spláchnutie), Straight Flush (priame spláchnutie), Four Of A Kind (4 svojho druhu), Full House (plný dom), Flush (spláchnutie), Straight (postupka), Three Of A Kind (3 svojho druhu), Two Pair (2 páry), Pair (pár), High Card (vysoká karta)</h1>
                <img id="pk-hnd" alt="" src={PKH}></img>
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