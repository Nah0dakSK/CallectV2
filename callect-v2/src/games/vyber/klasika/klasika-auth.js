import React from "react";
import "./klasika.css";
import PSK from "../../../images/piskvorky.png";
import GMK from "../../../images/2048.png";
import FCB from "../../../images/fcb.png";
import INSTA from "../../../images/insta.png";
import TWEET from "../../../images/twitter.png";
import { Link } from "react-router-dom";
import SidebarAuth from "../../../comp/sidebar/sideBarauth";

export default function Klasika() {
    return(
        <>
            <div className="klsk">
                <SidebarAuth/>
                <div className="krt-bdc-2">
                    <h1 className="krt-np">KLASICKÉ HRY</h1>
                </div>
                <Link to="/piskvorky-vyber_hraca2"><img id="psk-ik" alt="" src={PSK}></img></Link>
                <Link to="/gm2048-2"><img id="gm-ik" alt="" src={GMK}></img></Link>
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