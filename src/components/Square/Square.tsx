import { SquareProps } from "./interface";
import styles from './Square.module.css'

  
  export const Square = ({ value, onSquareClick } :SquareProps) => {
    return (
      <button className={styles.square} onClick={onSquareClick} aria-label={`Square ${value || 'empty'}`}>
        {value}
      </button>
    );
  };