import React from "react";
import "./popisbj.css";
import Sidebar from "../../sidebar/sideBar";
import FCB from "../../../../images/fcb.png";
import INSTA from "../../../../images/insta.png";
import TWEET from "../../../../images/twitter.png";

export default function Popisbj() {
    return(
        <>
            <div className="ppsbj">
                <Sidebar/>
                <div className="bj-np">
                   <h1 className="abt">BLACKJACK</h1> 
                </div>
                <div className="pk-pnp">
                   <h1 className="abt-2">Game goal</h1> 
                </div>
                <h1 className="bjtxt">Although many players can play in one round of blackjack, it is basically a two-player game. In blackjack, players don't play against each other; and do not cooperate. The only competition is the seller.</h1>
                <h1 className="bjtxt">The goal of the game is to collect a higher point total than the dealer, but without exceeding 21. To calculate your score, add up the values of each card. Cards 2 to 10 have their face value, J, Q and K are worth 10 points, and an ace is worth 1 or 11 points (player selection).</h1>
                <div className="botm-5">
                    <a href="https://www.facebook.com/Nah0dakSK"><img id="fcb" alt="" src={FCB}></img></a>
                    <a href="https://instagram.com/nah0daksk?igshid=MzNINGNkZWQ4Mg=="><img id="insta" alt="" src={INSTA}></img></a>
                    <a href="https://twitter.com/nah0dak?t=r3GnEl8I479rVfDZDOW0gQ&s=09"><img id="twitter" alt="" src={TWEET}></img></a>
                    <p className="name">NahOdakSK</p>
                </div>
            </div>
        </>
    )
}