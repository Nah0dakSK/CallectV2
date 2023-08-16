import React from "react";
import "./karty.css";
import Sidebar from "../../../comp/sidebar/sideBar";
import FCB from "../../../images/fcb.png";
import INSTA from "../../../images/insta.png";
import TWEET from "../../../images/twitter.png";
import BJ from "../../../images/blackjack.png";
import PK from "../../../images/poker.png";
import SLT from "../../../images/solitaire.png";

export default function Karty() {
    return(
        <>
            <div className="krty">
                <Sidebar/>
                <div className="krt-bdc">
                    <h1 className="krt-np">KARTOVÉ HRY</h1>
                </div>
                <img id="bj-ik" alt="" src={BJ}></img>
                <img id="pk-ik" alt="" src={PK}></img>
                <img id="slt-ik" alt="" src={SLT}></img>
                <div className="botm-3">
                    <a href="https://www.facebook.com/Nah0dakSK"><img id="fcb" alt="" src={FCB}></img></a>
                    <a href="https://instagram.com/nah0daksk?igshid=MzNINGNkZWQ4Mg=="><img id="insta" alt="" src={INSTA}></img></a>
                    <a href="https://twitter.com/nah0dak?t=r3GnEl8I479rVfDZDOW0gQ&s=09"><img id="twitter" alt="" src={TWEET}></img></a>
                    <p className="name">NahOdakSK</p>
                </div>
            </div>
        </>
    )
}