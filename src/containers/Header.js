import React from "react"
import { FiRotateCcw, FiClock } from "react-icons/fi"

import parseTimeMillis from "../utils/parseTimeMillis"
import dimensions from "../styles/dimensions"

const Header = props => {
  return (
    <div className='header'>
      <div
        className='inner-header'
        style={{ width: dimensions.container_width }}>
        <h1>Picmatch</h1>
        <div className='tool-bar'>
          <span>
            <p className='my-icon'>Moves &nbsp;</p>
            {props.flipped}
          </span>
          <span>
            <div className={"duration-text"}>
              <FiClock className={"clock-icon my-icon"} />
              <p>{parseTimeMillis(props.duration)}</p>
            </div>
          </span>
          <span>
            <FiRotateCcw onClick={props.reset} className='my-icon' />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
