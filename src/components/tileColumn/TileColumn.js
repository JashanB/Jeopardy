import React, { useReducer, useState } from 'react';
import './Tile.css'
import Tile from '../tile';


function TileColumn(props) {
  //if index 0 for tile - want to display category name
  //if index = 1 for tile, want to display points representing
  const categoryTile = <Tile
    key={props.categoryName + 'Display'} 
    display={props.categoryName}
    clickable={false}
  />
  const displayTile = <Tile 
    key={props.tiles.key}
    question={props.tiles.question}
    answer={props.tiles.answer}
    display={props.tiles.display}
    clickable={true}
  />

  return (
    <li className="grid-container">
      {categoryTile}
      {displayTile}
    </li>
  )
}

export const TileColumn = React.memo(TileColumn);