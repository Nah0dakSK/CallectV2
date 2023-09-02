import React from "react";
import "./popispk.css";
import PKH from "../../../../images/pk-hnd.png";
import FCB from "../../../../images/fcb.png";
import INSTA from "../../../../images/insta.png";
import TWEET from "../../../../images/twitter.png";
import SidebarAuth from "../../sidebar/sideBarauth";


export default function Popispk() {
    return(
        <>
            <div className="ppspk">
                <SidebarAuth/>
                <div className="pk-np">
                   <h1 className="abt">POKER</h1> 
                </div>
                <div className="pk-pnp">
                   <h1 className="abt-2">Cieľ hry</h1> 
                </div>
                <h1 className="bjtxt">is to create the best combination of five cards using a combination of two hole cards (on the hand) and five community cards (on the table). The first round begins with each player receiving two hole cards, which are dealt face down and are visible only to the players, who hold them until the end of the hand.</h1>
                <h1 className="bjtxt">When each player receives their two hole cards, the betting round before the flop begins. Then the dealer puts the first three of the five community cards on the table. These three cards are face up and known as flop.</h1>
                <h1 className="bjtxt">After the flop hits the playing field, the next betting round begins. The flop betting round is followed by another community card (also face up) that hits the board, known as a move.</h1>
                <h1 className="bjtxt">A round of bets is followed by a dealer who inserts a fifth card onto a playing field known as a river. River trading begins with the last round of bets, after which all remaining players show their hole cards. The player with the best five-card combination, using any combination of hole cards and community cards, wins.</h1>
                <div className="pk-pnp">
                   <h1 className="abt-2">Dealings</h1> 
                </div>
                <h1 className="bjtxt">Royal Flush (kráľovské spláchnutie), Straight Flush (priame spláchnutie), Four Of A Kind (4 svojho druhu), Full House (plný dom), Flush (spláchnutie), Straight (postupka), Three Of A Kind (3 svojho druhu), Two Pair (2 páry), Pair (pár), High Card (vysoká karta)</h1>
                <img id="pk-hnd" alt="" src={PKH}></img>
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