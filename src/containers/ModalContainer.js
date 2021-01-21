import React from "react"
import { FiPlay } from "react-icons/fi"

const ModalContainer = props => {
  return (
    <div className='modal-container'>
      <div className='my-modal'>
        <h2>You Win!</h2>
        <span className='modal-reset-btn' onClick={props.reset}>
          <FiPlay className='icon' />
        </span>
        <p>Play again</p>
      </div>
    </div>
  )
}

export default ModalContainer
