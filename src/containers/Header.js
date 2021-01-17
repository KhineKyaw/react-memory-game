import React from "react"

import dimensions from "../styles/dimensions"

const Header = props => {
  return (
    <div className='header'>
      <div
        className='inner-header'
        style={{ width: dimensions.container_width }}>
        <h1>Memory Game</h1>
      </div>
    </div>
  )
}

export default Header
