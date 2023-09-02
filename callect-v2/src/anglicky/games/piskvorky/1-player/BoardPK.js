import React from "react";
import { useState, useEffect } from "react";
import styles from "./OneTTT.module.css";
import FCB from "../../../../images/fcb.png";
import INSTA from "../../../../images/insta.png";
import TWEET from "../../../../images/twitter.png";

export default function TicTacToe() {
    const [board, setBoard] = useState([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    const [isCPUNext, setIsCPUNext] = useState(false);
    const [winner, setWinner] = useState(null);

    const players = {
        CPU: {
          SYM: "O",
          NAME: "CPU",
        },
        HUMAN: {
          SYM: "X",
          NAME: "YOU",
        },
      };

      function sleep(miliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < miliseconds);
      }

    function playFn(arrayIndex, index) {
        if (isCPUNext) return;
        if (winner) return;
        board[arrayIndex][index] = players?.HUMAN?.SYM;
        setBoard((board) => [...board]);
        checkWinner();
        setIsCPUNext(true);
      }

      useEffect(() => {
        if (winner) return;
        if (isCPUNext) {
          cPUPlay();
        }
      }, [isCPUNext]);

      function cPUPlay() {
        if (winner) return;
        sleep(1000);
      
        const cPUMove = getCPUTurn();
      
        board[cPUMove.arrayIndex][cPUMove.index] = players?.CPU?.SYM;
      
        setBoard((board) => [...board]);
        checkWinner();
        setIsCPUNext(false);
      }

      function getCPUTurn() {
        const emptyIndexes = [];
        board.forEach((row, arrayIndex) => {
          row.forEach((cell, index) => {
            if (cell === "") {
              emptyIndexes.push({ arrayIndex, index });
            }
          });
        });
        const randomIndex = Math.floor(Math.random() * emptyIndexes.length);
        return emptyIndexes[randomIndex];
      }

      function checkWinner() {
        // check same row
        for (let index = 0; index < board.length; index++) {
          const row = board[index];
          if (row.every((cell) => cell === players?.CPU?.SYM)) {
            setWinner(players?.CPU?.NAME);
            return;
          } else if (row.every((cell) => cell === players?.HUMAN?.SYM)) {
            setWinner(players?.HUMAN?.NAME);
            return;
          }
        }
      
        // check same column
        for (let i = 0; i < 3; i++) {
          const column = board.map((row) => row[i]);
          if (column.every((cell) => cell === players?.CPU?.SYM)) {
            setWinner(players?.CPU?.NAME);
            return;
          } else if (column.every((cell) => cell === players?.HUMAN?.SYM)) {
            setWinner(players?.HUMAN?.NAME);
            return;
          }
        }
      
        // check same diagonal
        const diagonal1 = [board[0][0], board[1][1], board[2][2]];
        const diagonal2 = [board[0][2], board[1][1], board[2][0]];
        if (diagonal1.every((cell) => cell === players?.CPU?.SYM)) {
          setWinner(players?.CPU?.NAME);
          return;
        } else if (diagonal1.every((cell) => cell === players?.HUMAN?.SYM)) {
          setWinner(players?.HUMAN?.NAME);
          return;
        } else if (diagonal2.every((cell) => cell === players?.CPU?.SYM)) {
          setWinner(players?.CPU?.NAME);
          return;
        } else if (diagonal2.every((cell) => cell === players?.HUMAN?.SYM)) {
          setWinner(players?.HUMAN?.NAME);
          return;
        } else if (board.flat().every((cell) => cell !== "")) {
          setWinner("draw");
          return;
        } else {
          setWinner(null);
          return;
        }
      }

      function displayWinner() {
        if (winner === "draw") {
          return <h1 className={styles.drw}>REMÍZA!</h1>;
        } else if (winner) {
          return <h1 className={styles.drw}>{winner} SI VYHRAL!</h1>;
        }
      }

      function displayTurn() {
        if (isCPUNext) {
          return <h1 className={styles.drw}>CPU</h1>;
        } else {
          return <h1 className={styles.drw}>TY</h1>;
        }
      }

      function playAgainFn() {
        setBoard([
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
        ]);
        setWinner(null);
        setIsCPUNext(false);
      }

    return (
    <div className={styles.container}>
        <div>{!winner && displayTurn()}</div>
        {winner && <h2>{displayWinner()}</h2>}
      <div className={styles.col}>
        <span onClick={() => playFn(0, 0)} className={styles.cell}>
          {board[0][0]}
        </span>
        <span onClick={() => playFn(0, 1)} className={styles.cell}>
          {board[0][1]}
        </span>
        <span onClick={() => playFn(0, 2)} className={styles.cell}>
          {board[0][2]}
        </span>
      </div>
      <div className={styles.col}>
        <span onClick={() => playFn(1, 0)} className={styles.cell}>
          {board[1][0]}
        </span>
        <span onClick={() => playFn(1, 1)} className={styles.cell}>
          {board[1][1]}
        </span>
        <span onClick={() => playFn(1, 2)} className={styles.cell}>
          {board[1][2]}
        </span>
      </div>
      <div className={styles.col}>
        <span onClick={() => playFn(2, 0)} className={styles.cell}>
          {board[2][0]}
        </span>
        <span onClick={() => playFn(2, 1)} className={styles.cell}>
          {board[2][1]}
        </span>
        <span onClick={() => playFn(2, 2)} className={styles.cell}>
          {board[2][2]}
        </span>
      </div>
      
        <div>
        {winner && (
      <button className={styles.video_game_button} onClick={playAgainFn}>
        RESTART
      </button>
        )}
    </div>
    <div className="botm-3">
                    <a href="https://www.facebook.com/Nah0dakSK"><img id="fcb" alt="" src={FCB}></img></a>
                    <a href="https://instagram.com/nah0daksk?igshid=MzNINGNkZWQ4Mg=="><img id="insta" alt="" src={INSTA}></img></a>
                    <a href="https://twitter.com/nah0dak?t=r3GnEl8I479rVfDZDOW0gQ&s=09"><img id="twitter" alt="" src={TWEET}></img></a>
                    <p className="name">NahOdakSK</p>
    </div>
    </div>
  );
  }