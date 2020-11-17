import React, { useReducer, useState } from 'react';
import './Tile.css'
import Tile from '../tile';


function TileColumn(props) {
  //if index 0 for tile - want to display category name
  //if index = 1 for tile, want to display points representing
  //we also want a on click function for the tile thats not the categroy that dispatches the question and answer for it, and sets tile cliced to true
  const categoryTile = <Tile 
    display={props.categoryName}
  />
  const tileList = props.tiles.map(function (tile, index) {
    return (
      <Tile
        key={tile.key}
        question={tile.question}
        answer={tile.answer}
        display={props.round}
      />
    );
  })
  return (
    <li className="grid-container">
      {tileList}
    </li>
  )
}

export const TileColumn = React.memo(TileColumn);