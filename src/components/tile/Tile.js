import React, { useReducer, useState } from 'react';
import './Tile.css'

function Tile(props) {
  //make on click function for the tile thats not the categroy that dispatches the question and answer for it, and sets tile cliced to true
  const clickable = props.clickable;
  function handleClick() {
    if (clickable) {
      dispatch({type: 'setQuestionClicked'});
      dispatch({type: 'setQuestionAndAnswer', question: props.question, answer: props.answer});

    }
  }
  //add function for click off to dispatch set question clicked
  return (
    <div className="grid-container" onClick={() => handleClick()}>
      <p>{props.display}</p>
    </div>
  )
}

export const Tile = React.memo(Tile)