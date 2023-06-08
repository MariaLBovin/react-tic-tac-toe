import { useState } from "react"
import { Board } from "./Board"
import { Square } from "./Square"

export const Game = () => {
    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill('')])
    const currentSquares = history[history.length -1]

    const handlePlay = (nextSquares :string[]) => {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

 
    return (
        <>
        <div className="game">
            <div>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}></Board></div>
        </div>
        </>
    )
}