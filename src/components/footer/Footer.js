import React from 'react';
import './Footer.css'

function Footer(props) {
  return (
    <span>Your points: {props.currentPoints}</span>
  )
}

export default Footer = React.memo(Footer)