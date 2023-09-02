import React from "react";
import "./karty.css";
import FCB from "../../../../images/fcb.png";
import INSTA from "../../../../images/insta.png";
import TWEET from "../../../../images/twitter.png";
import BJ from "../../../../images/blackjack.png";
import PK from "../../../../images/poker.png";
import SLT from "../../../../images/solitaire.png";
import { Link } from "react-router-dom";
import SidebarAuth from "../../../comp/sidebar/sideBarauth";

export default function Karty() {
    return(
        <>
            <div className="krty">
                <SidebarAuth/>
                <div className="krt-bdc">
                    <h1 className="krt-np">CARD GAMES</h1>
                </div>
                <Link to="/blackjack2-eng"><img id="bj-ik" alt="" src={BJ}></img></Link>
                <Link to="/poker2-eng"><img id="pk-ik" alt="" src={PK}></img></Link>
                <Link to="/solitaire2-eng"><img id="slt-ik" alt="" src={SLT}></img></Link>
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