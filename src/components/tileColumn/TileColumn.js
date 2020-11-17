import React, { useReducer, useState } from 'react';
import './Tile.css'
import Tile from '../tile';


function TileColumn(props) {
  //if index 0 for tile - want to display category name
  //if index = 1 for tile, want to display points representing
  //we also want a on click function for the tile thats not the categroy that dispatches the question and answer for it, and sets tile cliced to true

  const tileList = props.tiles.map(function(tile, index) {
    if (index === 0) {
      return (
        <Tile
          question={tile.question} 
          answer={tile.answer}
        />
      );
    } else {
      return (
        <Tile
          question={tile.question} 
          answer={tile.answer}
          onClick={}
        />
      );
    }
    
  })
  return (
    <li className="grid-container">
      {tileList}
    </li>
  )
}

export const TileColumn = React.memo(TileColumn);