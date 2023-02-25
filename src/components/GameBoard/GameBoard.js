import React from "react";

function GameBoard({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map(({id, value}) => {
        const letters = value.split('');
        return (
          <p key={id} className="guess">
            { letters.map((letter, index) => <span key={index} className="cell">{letter}</span>)}
          </p>
        )
      })}
    </div>
  )
}

export default GameBoard;