import React from "react";
import "./home.css";
import Sidebar from "../sidebar/sideBar";
import FCB from "../../images/fcb.png";
import INSTA from "../../images/insta.png";
import SNAP from "../../images/snap.png";

export default function Home() {
    return(
        <>
            <div className="hmp">
                <Sidebar/>
                <h1 className="txtdom">Herný web pre každého <li className="txtdm"><strong>CALLECT</strong> 
                je web, ktorý je určený na oddych a relaxáciu pri bežných počítačových hrách.</li></h1>
                <button className="button-dm">viac tu</button>
                <div className="botm-d">
                    <img id="fcb" alt="" src={FCB}></img>
                    <img id="insta" alt="" src={INSTA}></img>
                    <img id="snap" alt="" src={SNAP}></img>
                    <p className="name">Nah0dakSK</p>
                </div> 
            </div> 
        </>
    )
}