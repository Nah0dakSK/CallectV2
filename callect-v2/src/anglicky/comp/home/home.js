import React from "react";
import "./home.css";
import Sidebar from "../sidebar/sideBar";
import FCB from "../../../images/fcb.png";
import INSTA from "../../../images/insta.png";
import TWEET from "../../../images/twitter.png";
import { Link } from "react-router-dom";

export default function Home() {
    return(
        <>
            <div className="hmp">
                <Sidebar/>
                <h1 className="txtdom">Game web for everyone <li className="txtdm">CALLECT 
                is a web, which can be used for relaxation while playing usual computer games.</li></h1>
                <Link to="/popis-eng"><button className="button-dm">more</button></Link>
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