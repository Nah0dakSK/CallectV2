import React from "react";
import axios from "axios";
import styles from "./OneTTT.module.css";
import Sidebar from "../../../comp/sidebar/sideBar";
import BoardTTT from "./BoardPK";

export default function OneTTT() {
      
    return(
        <>
            <div className={styles.psk1bknd}>
                <Sidebar/>
                <div className="bj-np">
                   <h1 className="abt">TICTACTOE</h1> 
                </div>
                <BoardTTT/>
            </div>
        </>
    )
}