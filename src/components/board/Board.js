import React, { useReducer, useState } from 'react';
import './Board.css'
import Tile from '../tile';

function Board(props) {
  //for every object in questionbank, create a column with cateory names as first and clickable points after
  //all questions will have points = 100 * round 
  const tileList = questionBank.map(function(category) {
    return (
      <Tile 

      />
    )
  });
  return (
    <li className="grid-container">
    </li>
  )
}

export const Board = React.memo(Board)