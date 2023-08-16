import React from "react";
import "./kontakt.css";
import Sidebar from "../sidebar/sideBar";
import CNCT from "../../images/cnct.png";
import CALL from "../../images/phone.png";
import MAIL from "../../images/mail.jpg";
import NM from "../../images/name.jpg";
import FCB from "../../images/fcb.png";
import INSTA from "../../images/insta.png";
import TWEET from "../../images/twitter.png";

export default function Kontakt() {
    return(
        <>
            <div className="knkt">
                <Sidebar/>
                <img id="knt" alt="" src={CNCT}></img>
                <h1 className="abaut">KONTAKT</h1>
            <div className="bx">
                    <img id="nm" alt="" src={NM}></img>
                    <p className="nametxt">Patrik Fatura</p>
                    <img id="nm-1" alt="" src={MAIL}></img>
                    <p className="nametxt-1">patofatura@gmail.com</p>                
                    <img id="nm-2" alt="" src={CALL}></img>
                    <p className="nametxt-2">0904970325</p>                                 
            </div>
            <div className="botm-2">
                    <a href="https://www.facebook.com/Nah0dakSK"><img id="fcb" alt="" src={FCB}></img></a>
                    <a href="https://instagram.com/nah0daksk?igshid=MzNINGNkZWQ4Mg=="><img id="insta" alt="" src={INSTA}></img></a>
                    <a href="https://twitter.com/nah0dak?t=r3GnEl8I479rVfDZDOW0gQ&s=09"><img id="twitter" alt="" src={TWEET}></img></a>
                    <p className="name">NahOdakSK</p>
            </div>
            </div>
        </>
    )
}