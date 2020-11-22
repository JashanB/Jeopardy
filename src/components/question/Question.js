import React, { useState } from 'react';
import './Question.css';

function Question(props) {
  console.log('QUESTION', {props})
  const [input, setInput] = useState('');

  //make function to check if round 2 is ending and points = 0 => show game over

  function handleSubmit (event) {
    event.preventDefault();
  };

  return (
    <div className="question-div">
      <button className="minimize" onClick={() => props.minimizeButton()}>Minimize</button>
      <p>{props.question}</p>
      <form className="answer-form" autoComplete="off" onSubmit={handleSubmit}>
            <input
              type="text"
              id="answer-input"
              placeholder="Type your answer here"
              onChange={(event) => setInput(event.target.value)}
              value={input}
            />
          </form>
      <button onClick={() => props.validateAnswer(props.answer, input, props.pointsForQuestion, props.questionsRemaining)}>Submit</button>
    </div>
  )
}

export default Question = React.memo(Question)