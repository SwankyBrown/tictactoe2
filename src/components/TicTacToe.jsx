import React, { useState } from 'react';
import '../css/TicTacToe.css';

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null)); // Initialize the board
  const [xIsNext, setXIsNext] = useState(true); // Indicates if X is the next player

  const winner = calculateWinner(board);
  const isBoardFull = board.every((cell) => cell !== null); // Check if the board is full

  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isBoardFull) {
    status = "It's a tie!";
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handleCellClick = (index) => {
    if (board[index] || winner || isBoardFull) {
      return;
    }

    const newBoard = board.slice();
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        {board.map((cell, index) => (
          <div key={index} className="cell" onClick={() => handleCellClick(index)}>
            {cell}
          </div>
        ))}
      </div>
      {(winner || isBoardFull) && <button onClick={resetGame}>Play Again</button>}
    </div>
  );
}


function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default TicTacToe;