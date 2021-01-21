import React from "react"
import { FiPlay, FiClock } from "react-icons/fi"

import parseTimeMillis from "../utils/parseTimeMillis"

const ModalContainer = props => {
  return (
    <div className='modal-container'>
      <div className='my-modal'>
        <h2>You Win!</h2>
        <span className='modal-span'>
          {props.flipped}
          <p className='my-icon'>&nbsp;Moves</p>
        </span>
        <span className='modal-span'>
          <div className={"duration-text"}>
            <FiClock className={"my-icon"} />
            <p>{parseTimeMillis(props.duration)}</p>
          </div>
        </span>
        <span className='modal-reset-btn' onClick={props.reset}>
          <FiPlay className='icon' />
        </span>
        <p>Play again</p>
      </div>
    </div>
  )
}

export default ModalContainer
