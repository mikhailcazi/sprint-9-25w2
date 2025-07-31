import { useState } from "react";

function TicTacToe() {
  const INIT_BOARD = ["", "", "", "", "", "", "", "", ""];
  const [grid, setGrid] = useState(INIT_BOARD);
  const [currentPlayer, setCurrentPlayer] = useState(1); // Player 1 = X, Player 2 = O

  const handleCellClick = (event) => {
    const index = event.target.id;

    if (grid[index]) return;

    let charToPlay = "O";
    if (currentPlayer == 1) charToPlay = "X";

    let newGrid = [...grid];
    newGrid[index] = charToPlay;
    setGrid(newGrid);

    let nextPlayer = 1;
    if (currentPlayer === 1) nextPlayer = 2;

    setCurrentPlayer(nextPlayer);

    checkIfVictory();
  };

  const checkIfVictory = () => {
    // check each combination to see if someone has won, and if they have then maybe show a victory sign
  };

  const resetGame = () => {
    setGrid(INIT_BOARD);
    setCurrentPlayer(1);
  };

  return (
    <>
      <h1>Welcome to Tic-Tac-Toe!</h1>
      <div className="board">
        {grid.map((element, index) => {
          return (
            <div
              className="cell"
              key={index}
              onClick={handleCellClick}
              id={index}
            >
              <span className="cell-text">{element}</span>
            </div>
          );
        })}
      </div>
      <div>
        <h3>It is Player {currentPlayer}'s turn!</h3>
        <button onClick={resetGame}>RESET</button>
      </div>
    </>
  );
}

export default TicTacToe;
