import React, { useReducer, useState } from 'react';
import './Tile.css'
import Tile from '../tile';


function TileColumn(props) {
  const tileList = props.tiles.map(function(tile) {
    return (
      <Tile 
      />
    )
  })
  return (
    <li className="grid-container">
      {tileList}
    </li>
  )
}

export const TileColumn = React.memo(TileColumn)