import React from "react";
import "./2048.css";
import Sidebar from "../../comp/sidebar/sideBar";

export default function Game2048() {
    return(
        <>
            <div className="2048-bd">
                <Sidebar/>
            </div>
        </>
    )
}