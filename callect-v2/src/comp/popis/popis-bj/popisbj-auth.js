import React from "react";
import "./popisbj.css";
import FCB from "../../../images/fcb.png";
import INSTA from "../../../images/insta.png";
import TWEET from "../../../images/twitter.png";
import SidebarAuth from "../../sidebar/sideBarauth";

export default function PopisbjAuth() {
    return(
        <>
            <div className="ppsbj">
                <SidebarAuth/>
                <div className="bj-np">
                   <h1 className="abt">BLACKJACK</h1> 
                </div>
                <div className="pk-pnp">
                   <h1 className="abt-2">Cieľ hry</h1> 
                </div>
                <h1 className="bjtxt">Aj keď veľa hráčov môže hrať v jednom kole blackjacku, je to v podstate hra pre dvoch hráčov. V blackjacku hráči nehrajú proti sebe; a nespolupracujú. Jedinou konkurenciou je predajca.</h1>
                <h1 className="bjtxt">Cieľom hry je nazbierať vyšší bodový súčet ako krupiér, ale bez toho, aby prekročil 21. Skóre vypočítate sčítaním hodnôt jednotlivých kariet. Karty 2 až 10 majú svoju nominálnu hodnotu, J, Q a K majú hodnotu 10 bodov a eso má hodnotu 1 alebo 11 bodov (výber hráča).</h1>
                <div className="botm-5">
                    <a href="https://www.facebook.com/Nah0dakSK"><img id="fcb" alt="" src={FCB}></img></a>
                    <a href="https://instagram.com/nah0daksk?igshid=MzNINGNkZWQ4Mg=="><img id="insta" alt="" src={INSTA}></img></a>
                    <a href="https://twitter.com/nah0dak?t=r3GnEl8I479rVfDZDOW0gQ&s=09"><img id="twitter" alt="" src={TWEET}></img></a>
                    <p className="name">NahOdakSK</p>
                </div>
            </div>
        </>
    )
}