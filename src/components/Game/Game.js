import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessResults from '../GuessResults/GuessResults';
import GameBoard from '../GameBoard/GameBoard';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState(new Array(NUM_OF_GUESSES_ALLOWED).fill('').map(() => ({
    id: Math.random(),
    value: '     '
  })))
  const [currentGuess, setCurrentGuess] = React.useState(0)

  const handleGuess = (guess) => {
    if (guess.length < 5) {
      return
    }
    if (currentGuess < NUM_OF_GUESSES_ALLOWED) {
      const nextGuessList = [...guessList];
      nextGuessList[currentGuess] = {
        id: Math.random(),
        value: guess
      }
      setCurrentGuess(currentGuess + 1);
      setGuessList(nextGuessList)
    }
  }

  return (
    <>
      <GameBoard guessList={guessList} answer={answer} currentGuess={currentGuess} />
      <GuessInput handleGuess={handleGuess} />
      {/* <GuessResults guessList={guessList} /> */}
    </>
  )
}

export default Game;
