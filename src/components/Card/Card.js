import React from "react"

import classes from "./Card.module.css"
import dimensions from "../../styles/dimensions"

const totle_shift = dimensions.card_size + dimensions.card_margin
const helf_margin = dimensions.card_margin / 2

const Card = props => {
  const topPos =
    Math.floor(props.index / dimensions.number_of_col) * totle_shift +
    helf_margin

  const leftPos =
    (props.index % dimensions.number_of_col) * totle_shift + helf_margin

  return (
    <div
      onClick={props.clicked}
      className={classes.card}
      style={{
        width: dimensions.card_size,
        height: dimensions.card_size,
        left: leftPos,
        top: topPos
      }}>
      <img
        onAnimationEnd={props.animationEnd}
        className={!props.show ? classes.hide_image : classes.show_image}
        src={props.src}
        alt={props.title}></img>
    </div>
  )
}

export default Card
