import React, { useState } from 'react';
import "../css/TicTacToe.css"
function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true)

    const handleCellClick = (index) => {
        if (board[index] || calculateWinner(board)) {
            return;
        }
        
    const newBoard = board.slice();
    newBoard[index] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
    };

  return (
    <div className="board">
    {board.map((cell, index) => (
      <div key={index} className="cell" onClick={() => handleCellClick(index)}>
        {cell}
      </div>
    ))}
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