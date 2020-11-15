import React, { useReducer, useState } from 'react';
import './Footer.css'

function Footer(props) {
  return (
    <span>Your points: {props.currentPoints}</span>
  )
}

export const Footer = React.memo(Footer)