import React from "react";
import "./sideBar.css";
import LP from "../../images/CallectLogo.png";
import CM from "../../images/cardgm.png";
import CM2 from "../../images/cargmd.png";
/* import FCB from "../../images/fcb.png";
import INSTA from "../../images/insta.png";
import TWEET from "../../images/twitter.png"; */
import BRIT from "../../images/british-flag.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Sidebar() {
    const { loginWithRedirect } = useAuth0();
    return(
        <>
        <div className="header">
                <Link to="/domov"><img id="logo-home" alt="" src={LP}></img></Link>
                <Link to="/domov"><p className="dom">domov</p></Link>
                <Link to="/kontakt"><p className="kon">kontakt</p></Link>
                <Link to="/popis"><p className="pop">popis</p></Link>
                <button className="button-log" onClick={() => loginWithRedirect()}>Login/Register</button>
                <Link to="/domov-eng"><img id="brit" alt="" src={BRIT}></img></Link>
            <input type="checkbox" className="sidebarmenu" id="sidebarmenu"/>
            <label htmlFor="sidebarmenu" className="sidebaricontoggle">
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal"></div>
                <div className="spinner diagonal part-2"></div>
            </label>
            <div id="sidebarmenu">
                <p className="typh">HRY</p>
                <Link to="/karty"><img id="cardb" alt="" src={CM}></img></Link>
                <Link to="/klasika"><img id="cardb2" alt="" src={CM2}></img></Link>
            </div>
        </div>
            <div id="center" className="main center">
                <div className="mainInner"></div>
            </div>
        </>
    );
}
export default Sidebar;

/*  <div className="botm">
        <img id="fcb" alt="" src={FCB}></img>
        <img id="insta" alt="" src={INSTA}></img>
        <img id="snap" alt="" src={TWEET}></img>
        <p className="name">NahOdakSK</p>
    </div>            */