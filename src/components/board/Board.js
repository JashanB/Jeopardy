import React, { useReducer, useState } from 'react';
import './Board.css'
import TileColumn from '../tileColumn';

function Board(props) {
  //for every object in questionbank, create a column with cateory names as first and cdivckable points after
  //all questions will have points = 100 * round 
  //make a function to dispatch 
  const tileColumns = props.questionBank.map(function(block, index) {
    const displayValue = 100 * props.round * (index + 1);
    if (props.round === 1) {
      const tiles = block.round1;
    } else if (props.round === 2) {
      const tiles = block.round2;
    }
    return (
      <TileColumn
        categoryName={block.category}
        tiles={tiles}
        display={displayValue}
        handleTileClick={props.handleTileClick}
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