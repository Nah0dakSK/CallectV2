import React from "react";
import "./popis.css";
import Sidebar from "../sidebar/sideBar";
import INFO from "../../images/info.png";
import FCB from "../../images/fcb.png";
import INSTA from "../../images/insta.png";
import TWEET from "../../images/twitter.png";
import BJ from "../../images/blackjack.png";
import PK from "../../images/poker.png";
import SLT from "../../images/solitaire.png";
import PIS from "../../images/piskvorky.png";
import GM from "../../images/2048.png";
import { Link } from "react-router-dom";

export default function Popis() {
    return(
        <>
            <div className="pps">
                <Sidebar/>
                <img id="info" alt="" src={INFO}></img>
                <h1 className="abaut">POPIS</h1>
                    <div className="ppstxt">Web, ktorý je určený na oddych a relaxáciu pri bežných počítačových hrách.</div>
                    <div className="ppstxt2">Používatelia majú na výber rôzne hry či už kartové alebo klasické PC hry.</div>
                    <div className="ppstxt3">Tu nájdete popisy jednotlivých hier:</div>
                    <Link to="/popis-blackjack"><img id="bj-pps" alt="" src={BJ}></img></Link>
                    <Link to="/popis-poker"><img id="pk-pps" alt="" src={PK}></img></Link>
                    <Link to="/popis-solitaire"><img id="pk-pps" alt="" src={SLT}></img></Link>
                    <Link to="/popis-piskvorky"><img id="pk-pps" alt="" src={PIS}></img></Link>
                    <Link to="/popis-2048"><img id="pk-pps" alt="" src={GM}></img></Link>
                <div className="botm-1">
                    <a href="https://www.facebook.com/Nah0dakSK"><img id="fcb" alt="" src={FCB}></img></a>
                    <a href="https://instagram.com/nah0daksk?igshid=MzNINGNkZWQ4Mg=="><img id="insta" alt="" src={INSTA}></img></a>
                    <a href="https://twitter.com/nah0dak?t=r3GnEl8I479rVfDZDOW0gQ&s=09"><img id="twitter" alt="" src={TWEET}></img></a>
                    <p className="name">NahOdakSK</p>
                </div>
            </div>
        </>
    )
}