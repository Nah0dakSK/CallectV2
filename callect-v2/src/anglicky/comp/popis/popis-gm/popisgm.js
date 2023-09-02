import React from "react";
import "./popisgm.css";
import Sidebar from "../../sidebar/sideBar";
import FCB from "../../../../images/fcb.png";
import INSTA from "../../../../images/insta.png";
import TWEET from "../../../../images/twitter.png";

export default function Popisgm() {
    return(
        <>
            <div className="ppsgm">
                <Sidebar/>
                <div className="gm-np">
                   <h1 className="abt">2048</h1> 
                </div>
                <div className="pk-pnp">
                   <h1 className="abt-2">Game goal</h1> 
                </div>
                <h1 className="bjtxt">1. Start by pushing tiles into one corner of the square. Placing tiles together in one corner gives you a better chance of moving tiles with the same number closer together. You can use one of the four corners of the box, top left, top right, bottom left, and bottom right. The square on the edge of the corner you selected should contain the highest number so that it doesn't get in the way of combining other tiles.</h1>
                <h1 className="bjtxt">2. Never place tiles with high numbers in the center of the box. Doing so will make it harder for you to combine other tiles because your tile with a higher number on it will block other tiles with lower numbers that appear.</h1>
                <h1 className="bjtxt">3. Start with tiles with small numbers on them. Let tiles with high numbers stay in one corner while combining them with smaller numbers. Then the score will increase over time.</h1>
                <h1 className="bjtxt">4. Use the boxes that are visible next to the corner you're using to leave the tile with the highest number so you can combine them more easily.</h1>
                <h1 className="bjtxt">5. Do not rush to combine tiles with high values. This could distract the tiles you're holding away and make it difficult to combine large amounts of tiles. Continue combining squares with small values until you reach your goal.</h1>
                <h1 className="bjtxt">6. Exercise a lot. Experience is one of the greatest mentors a person can have. Playing the game a lot will give you a lot of practice and allow you to develop different strategies to get a high score. Be patient and let your experience lead you to greater success in the game.</h1>
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