import React, { useReducer, useState } from 'react';
import './Board.css'
import TileColumn from '../tileColumn';

function Board(props) {
  //for every object in questionbank, create a column with cateory names as first and cdivckable points after
  //all questions will have points = 100 * round 
  //make a function to dispatch 
  const displayValue = props.round * 100;
  const tileColumns = props.questionBank.map(function(block) {
    return (
      <TileColumn
        categoryName={block.category}
        tiles={block.questions[props.round]}
        display={displayValue}
      />
    )
  });
  return (
    <div className="grid-container">
      {tileColumns}
    </div>
  )
}

export default Board = React.memo(Board);