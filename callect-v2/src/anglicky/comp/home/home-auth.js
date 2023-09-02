import React from "react";
import "./home.css";
import FCB from "../../../images/fcb.png";
import INSTA from "../../../images/insta.png";
import TWEET from "../../../images/twitter.png";
import { Link } from "react-router-dom";
import SidebarAuth from "../sidebar/sideBarauth";

export default function HomeAuth() {
    return(
        <>
            <div className="hmp">
                <SidebarAuth/>
                <h1 className="txtdom">Herný web pre každého <li className="txtdm">CALLECT 
                je web, ktorý je určený na oddych a relaxáciu pri bežných počítačových hrách.</li></h1>
                <Link to="/popis2-eng"><button className="button-dm">viac tu</button></Link>
                <div className="botm-d">
                    <a href="https://www.facebook.com/Nah0dakSK"><img id="fcb" alt="" src={FCB}></img></a>
                    <a href="https://instagram.com/nah0daksk?igshid=MzNINGNkZWQ4Mg=="><img id="insta" alt="" src={INSTA}></img></a>
                    <a href="https://twitter.com/nah0dak?t=r3GnEl8I479rVfDZDOW0gQ&s=09"><img id="twitter" alt="" src={TWEET}></img></a>
                    <p className="name">NahOdakSK</p>
                </div> 
            </div> 
        </>
    )
}