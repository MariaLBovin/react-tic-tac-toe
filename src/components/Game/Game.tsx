import { useState } from "react";
import { Board } from "../Board/Board";
import { calculateWinner } from "../../utils/calculateWinner";
import styles from './Game.module.css'

export const Game = () => {
  const [, setXIsNext] = useState(true);
  const [showResult, setShowResult] = useState(false)
  const [history, setHistory] = useState([Array(9).fill("")]);
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares: string[], nextXIsNext: boolean) => {
    setHistory([...history, nextSquares]);
    setXIsNext(nextXIsNext);
  };
  const handleRestart = () => {
    setHistory([Array(9).fill("")]);
    setXIsNext(true);
  };

  const winner = calculateWinner(currentSquares);
  const isDraw = !winner && currentSquares.every((square) => square !== "");

  

  return (
    <div className={styles.game}>
      <h1 className={styles['game-header']}>Välkommen till Luffarschack</h1>
      <h2 className={styles['game-subheader']}>Du börjar!</h2>
        <Board squares={currentSquares} onPlay={handlePlay} />
        {(winner || isDraw) && (
        <div className={styles['game-over']}>
          <p className={styles['game-winner']}>
            {winner ? `Vinnare: ${winner}` : "Det blev lika!"}
          </p>
          <button className={styles['game-button']} onClick={handleRestart}>
            Spela igen
          </button>
        </div>
      )}
    </div>
  );
};
