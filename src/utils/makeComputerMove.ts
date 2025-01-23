export const makeComputerMove = (squares: string[]): string[] => {
    const emptySquares = squares
      .map((value, index) => (value === "" ? index : null))
      .filter((index) => index !== null) as number[];
  
    if (emptySquares.length > 0) {
      const randomIndex = emptySquares[Math.floor(Math.random() * emptySquares.length)];
      const newSquares = [...squares];
      newSquares[randomIndex] = "O";
      return newSquares;
    }
  
    return squares;
  };
  