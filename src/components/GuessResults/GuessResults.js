import React from "react";

function GuessResults({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((gl) => (
        <p key={gl.id} className="guess">{gl.value}</p>
      ))}
    </div>
  )
}

export default GuessResults;
