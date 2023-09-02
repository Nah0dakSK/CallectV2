import React from "react";
import "./popispis.css";
import Sidebar from "../../sidebar/sideBar";
import FCB from "../../../../images/fcb.png";
import INSTA from "../../../../images/insta.png";
import TWEET from "../../../../images/twitter.png";

export default function Popispis() {
    return(
        <>
            <div className="ppspis">
                <Sidebar/>
                <div className="bj-np">
                   <h1 className="abt">TICTACTOE</h1> 
                </div>
                <div className="pk-pnp">
                   <h1 className="abt-2">Game goal</h1> 
                </div>
                <h1 className="bjtxt">You are X, your friend (or computer in this case) is O. Players take turns placing their tags in empty boxes.</h1>
                <h1 className="bjtxt">The winner is the first player to receive 3 marks in a row (up, down, across or diagonally).</h1>
                <h1 className="bjtxt">When all 9 cells are full, the game is over. If no player has 3 marks in a row, the game ends in a draw.</h1>
                <div className="pk-pnp">
                   <h1 className="abt-2">Win?</h1> 
                </div>
                <h1 className="bjtxt">To beat a computer (or at least a tie), you need to employ a bit of strategy. Strategy means figuring out what you need to do to win.</h1>
                <h1 className="bjtxt">Part of your strategy is to try to figure out how to get three X's in a row. The second part tries to figure out how to prevent a computer from getting three O's in a row.</h1>
                <h1 className="bjtxt">After inserting X into the square, you start looking ahead. Where is the best place for your next X? You look at empty squares and decide which ones are good choices that will allow you to do three X's in a row.</h1>
                <h1 className="bjtxt">You also need to monitor where the computer places its O . This could change what you do next. If the computer gets two O in a row, you need to put another X in the last empty square in this line, otherwise the computer will win. You are forced to play on a certain square or lose the game.</h1>
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