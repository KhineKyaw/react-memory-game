import React from "react"
import { FiRotateCcw } from "react-icons/fi"

import dimensions from "../styles/dimensions"

const Header = props => {
  return (
    <div className='header'>
      <div
        className='inner-header'
        style={{ width: dimensions.container_width }}>
        <h1>Picmatch</h1>
        <div className='tool-bar'>
          <span>Moves {props.flipped}</span>
          <span></span>
          <span onClick={props.reset}>
            <FiRotateCcw />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
