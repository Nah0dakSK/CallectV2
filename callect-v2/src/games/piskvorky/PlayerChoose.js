import React from "react";
import "./PlayerChoose.css";
import Sidebar from "../../comp/sidebar/sideBar";
import P1 from "../../images/p1.png";
import P2 from "../../images/p2.png";
import FCB from "../../images/fcb.png";
import INSTA from "../../images/insta.png";
import TWEET from "../../images/twitter.png";
import { Link } from "react-router-dom";

export default function PlayerChoose() {
    return(
        <>
            <div className="psk-bkd">
                <Sidebar/>
                <div className="krt-bdc-2">
                    <h1 className="krt-np">VÝBER HRÁČA</h1>
                </div>
                <br/>
                <Link to="/piskvorky-1-hrac"><img id="p1" alt="" src={P1}></img></Link>
                <Link to="/piskvorky-2-hraci"><img id="p2" alt="" src={P2}></img></Link>
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