import React from "react";
import styles from "./OneTTT.module.css";
import BoardTTT from "./BoardPK";
import SidebarAuth from "../../../comp/sidebar/sideBarauth";

export default function OneTTT() {
      
    return(
        <>
            <div className={styles.psk1bknd}>
                <SidebarAuth/>
                <div className="bj-np">
                   <h1 className="abt">PISKVORKY</h1> 
                </div>
                <BoardTTT/>
            </div>
        </>
    )
}