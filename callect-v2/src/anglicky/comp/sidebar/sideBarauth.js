import React from "react";
import "./sideBar.css";
import LP from "../../../images/CallectLogo.png";
import CM from "../../../images/cardgm.png";
import CM2 from "../../../images/cargmd.png";
/* import FCB from "../../images/fcb.png";
import INSTA from "../../images/insta.png";
import TWEET from "../../images/twitter.png"; */
import SVK from "../../../images/slovak-flag.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "reactjs-popup/dist/index.css";
import Popup from "reactjs-popup";

function SidebarAuth() {
    const { logout, user } = useAuth0();
    return(
        <>
        <div className="header">
                <Link to="/domov2-eng"><img id="logo-home" alt="" src={LP}></img></Link>
                <Link to="/domov2-eng"><p className="dom">home</p></Link>
                <Link to="/kontakt2-eng"><p className="kon">contact</p></Link>
                <Link to="/popis2-eng"><p className="pop">about</p></Link>
                <Popup trigger=
                {<img src={user.picture} alt={user.name} id="Profile"></img>}>
                <p className="par">{user.name}</p>
                <p className="par">{user.email}</p>
                <button className="logout" onClick={() => logout()}>LOGOUT</button>
                </Popup>
                <Link to="/domov2"><img id="brit" alt="" src={SVK}></img></Link>
            <input type="checkbox" className="sidebarmenu" id="sidebarmenu"/>
            <label htmlFor="sidebarmenu" className="sidebaricontoggle">
                <div className="spinner diagonal part-1"></div>
                <div className="spinner horizontal"></div>
                <div className="spinner diagonal part-2"></div>
            </label>
            <div id="sidebarmenu">
                <p className="typh">GAMES</p>
                <Link to="/karty2-eng"><img id="cardb" alt="" src={CM}></img></Link>
                <Link to="/klasika2-eng"><img id="cardb2" alt="" src={CM2}></img></Link>
            </div>
        </div>
            <div id="center" className="main center">
                <div className="mainInner"></div>
            </div>
        </>
    );
}
export default SidebarAuth;