import React from 'react';

const GuessInput = ({handleGuess}) => {
  const [guess, setGuess] = React.useState('')

  const handleChange = event => {
    setGuess(event.target.value.toUpperCase())
  }

  const handleSubmit = event => {
    event.preventDefault();
    setGuess('')
    handleGuess(guess)
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        maxLength={5}
        pattern="[A-Z]{5}"
      />
    </form>
  )
};

export default GuessInput;