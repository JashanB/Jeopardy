import React, { useReducer, useState } from 'react';
import './Tile.css'

function Tile(props) {
  //make on click function for the tile thats not the categroy that dispatches the question and answer for it, and sets tile cliced to true
  const clickable = props.clickable;
  // function handleTileClick(clickable) {
  //   if (clickable) {
  //     dispatch({type: 'setQuestionClicked'});
  //     dispatch({type: 'setQuestionAndAnswer', question: props.question, answer: props.answer});
  //   }
  // }
  //add function for click off to dispatch set question clicked
  return (
    <div className="tile" onClick={() => props.handleTileClick(clickable, props.question, props.answer, props.display)}>
      <p>{props.display}</p>
    </div>
  )
}

export default Tile = React.memo(Tile)