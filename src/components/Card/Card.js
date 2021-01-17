import React from "react"

import classes from "./Card.module.css"
import mango from "../../assets/images/png"

console.log(mango)

const Card = props => {
  return (
    <div className={classes.card}>
      {/* <img src={mango} width='100' height='100' alt='mango'></img> */}
    </div>
  )
}

export default Card
