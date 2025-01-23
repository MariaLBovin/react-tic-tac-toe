export interface BoardProps {
  squares: string[];
  onPlay: (nextSquares: string[], nextXIsNext: boolean) => void;
}
