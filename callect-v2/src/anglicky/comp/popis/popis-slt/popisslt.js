import React from "react";
import "./popisslt.css";
import Sidebar from "../../sidebar/sideBar";
import FCB from "../../../../images/fcb.png";
import INSTA from "../../../../images/insta.png";
import TWEET from "../../../../images/twitter.png";

export default function Popisslt() {
    return(
        <>
            <div className="ppsslt">
                <Sidebar/>
                <div className="bj-np">
                   <h1 className="abt">SOLITAIRE</h1> 
                </div>
                <div className="pk-pnp">
                   <h1 className="abt-2">Game goal</h1> 
                </div>
                <h1 className="bjtxt">The first objective is to release and play certain cards into position to build every foundation, in order and in suit, from ace to king. The ultimate goal is to build the entire deck on the foundation, and if this succeeds, the solitaire game is won.</h1>
                <h1 className="bjtxt">The initial field can be changed by "building" - transferring cards between tabs face up in tableau. Some tableau cards can be played at the same time, while others may not be played until certain blocking cards are removed. For example, of the seven cards pointing up in tableau, if there is one nine and the other ten, you can transfer nine to the top ten to start building this pile gradually. Since you moved nine of one of the seven piles, you unlocked the card face down.</h1>
                <h1 className="bjtxt">When you transfer cards in tableau and start building sequences, if you reveal an ace, the ace should be placed in one of the foundation piles. The foundations are built according to the suit and gradually from ace to king.
                                      Continue transferring cards to each other in the table in order. If you can no longer move cards face up, you can take advantage of the stock pile by flipping the first card. This card can be played in basics or tableau. If you can't play a card in tableau or foundation piles, drag the card to the garbage pile and flip the next card in the inventory pile.</h1>
                <h1 className="bjtxt">If free space is created in Tableau by deleting tabs elsewhere, it is called "space" and is of great importance when manipulating Tableau. If space is created, it can only be filled by the king. Filling the space with king could potentially unlock one of the cards face down in another pile in the tableau. Keep transferring cards in tableau and bring cards into the game from the stock pile until all cards are built in suit sequences in the founder's piles to win!</h1>
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