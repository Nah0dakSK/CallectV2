import React from "react";
import "./klasika.css";
import Sidebar from "../../../comp/sidebar/sideBar";
import PSK from "../../../images/piskvorky.png";
import GMK from "../../../images/2048.png";
import FCB from "../../../images/fcb.png";
import INSTA from "../../../images/insta.png";
import TWEET from "../../../images/twitter.png";

export default function Klasika() {
    return(
        <>
            <div className="klsk">
                <Sidebar/>
                <div className="krt-bdc-2">
                    <h1 className="krt-np">KLASICKÉ HRY</h1>
                </div>
                <img id="psk-ik" alt="" src={PSK}></img>
                <img id="gm-ik" alt="" src={GMK}></img>
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