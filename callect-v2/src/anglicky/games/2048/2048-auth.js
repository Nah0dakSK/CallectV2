import React from "react";
import "./2048.css";
import FCB from "../../../images/fcb.png";
import INSTA from "../../../images/insta.png";
import TWEET from "../../../images/twitter.png";
import GMS from "./GameController";
import SidebarAuth from "../../comp/sidebar/sideBarauth";


export default function Game2048() {

    return(
        <>
            <div className="bd-2048">
                <SidebarAuth/>
                <div className="gm-np">
                   <h1 className="abt">2048</h1> 
                </div>
                <GMS/>
                <div className="botm-6">
                    <a href="https://www.facebook.com/Nah0dakSK"><img id="fcb" alt="" src={FCB}></img></a>
                    <a href="https://instagram.com/nah0daksk?igshid=MzNINGNkZWQ4Mg=="><img id="insta" alt="" src={INSTA}></img></a>
                    <a href="https://twitter.com/nah0dak?t=r3GnEl8I479rVfDZDOW0gQ&s=09"><img id="twitter" alt="" src={TWEET}></img></a>
                    <p className="name">NahOdakSK</p>
                </div>
            </div>
        </>
    )
}