import React from "react";
import { checkGuess } from '../../game-helpers';

function GameBoard({ guessList, answer, currentGuess }) {
  return (
    <div className="guess-results">
      {guessList.map(({id, value}, wordIndex) => {
        const result = checkGuess(value, answer)
        return (
          <p key={id} className="guess">
            { result.map(({letter, status}, index) => <span key={index} className={`cell ${wordIndex < currentGuess ? status : ''}`}>{letter}</span>)}
          </p>
        )
      })}
    </div>
  )
}

export default GameBoard;