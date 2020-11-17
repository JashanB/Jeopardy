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
  const tileList = props.tiles.map(function (tile, index) {
    return (
      <Tile
        key={tile.key}
        question={tile.question}
        answer={tile.answer}
        display={props.display}
        clickable={true}
      />
    );
  })
  return (
    <li className="grid-container">
      {categoryTile}
      {tileList}
    </li>
  )
}

export const TileColumn = React.memo(TileColumn);