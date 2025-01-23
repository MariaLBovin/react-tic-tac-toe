import { calculateWinner } from "../../utils/calculateWinner";
import { makeComputerMove } from "../../utils/makeComputerMove";
import { Square } from "../Square/Square";
import { BoardProps } from "./interface";
import styles from './Board.module.css'


export const Board = ({ squares, onPlay }: BoardProps) => {
  const handleClick = (i: number) => {

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = [...squares];
    nextSquares[i] = "X";

    onPlay(nextSquares, false);

    if (calculateWinner(nextSquares)) {
      return;
    }

    setTimeout(() => {
      const updatedSquares = makeComputerMove(nextSquares);
      onPlay(updatedSquares, true);
    }, 500);
  };

  const renderSquare = (index: number) => (
    <Square
      key={index}
      value={squares[index]}
      onSquareClick={() => handleClick(index)}
    />
  );

  const renderRow = (start: number) => (
    <div className={styles.row} key={start}>
      {Array.from({ length: 3 }, (_, i) => renderSquare(start + i))}
    </div>
  );
  return (
    <div className={styles.board}>
    {Array.from({ length: 3 }, (_, i) => renderRow(i * 3))}
  </div>
  );
};
