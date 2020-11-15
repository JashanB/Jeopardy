import React, { useReducer, useState } from 'react';
import './Tile.css'

function Board(props) {
  const [questionClicked, setQuestionClicked] = useState(false);
  //make function for if points box clicked, transistions to question (question can be overlayed over board)

  //for every object in questionbank, create a column with cateory names as first and clickable points after
  //all questions will have points = 100 * round 
  return (
    <li className="grid-container">
      {questionClicked && <Question currentPoints={props.currentPoints} round={props.round}/>}
    </li>
  )
}

export const Board = React.memo(Board)