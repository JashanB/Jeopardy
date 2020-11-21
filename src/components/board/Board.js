import React, { useReducer, useState } from 'react';
import './Board.css'
import TileColumn from '../tileColumn';

function Board(props) {
  //for every object in questionbank, create a column with cateory names as first and cdivckable points after
  //all questions will have points = 100 * round 
  //make a function to dispatch 
  const tileColumns = props.questionBank.map(function(block, index) {
    let tiles;
    if (props.round === 1) {
      tiles = block.round1;
    } else if (props.round === 2) {
      tiles = block.round2;
    }
    return (
      <TileColumn
        categoryName={block.category}
        tiles={tiles}
        round={props.round}
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