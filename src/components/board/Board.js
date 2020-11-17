import React, { useReducer, useState } from 'react';
import './Board.css'
import TileColumn from '../tileColumn';

function Board(props) {
  //for every object in questionbank, create a column with cateory names as first and clickable points after
  //all questions will have points = 100 * round 
  //make a function to dispatch 
  const tileColumns = questionBank.map(function(category) {
    return (
      <TileColumn
        categoryName={category.category}
        tiles={category.questions[props.round]}
      />
    )
  });
  return (
    <li className="grid-container">
      {tileColumns}
    </li>
  )
}

export const Board = React.memo(Board)