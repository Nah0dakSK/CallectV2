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
                    <img id="bj-pps" alt="" src={BJ}></img>
                    <img id="pk-pps" alt="" src={PK}></img>
                    <img id="slt-pps" alt="" src={SLT}></img>
                <div className="botm-1">
                    <img id="fcb" alt="" src={FCB}></img>
                    <img id="insta" alt="" src={INSTA}></img>
                    <img id="twitter" alt="" src={TWEET}></img>
                    <p className="name">NahOdakSK</p>
                </div>
            </div>
        </>
    )
}