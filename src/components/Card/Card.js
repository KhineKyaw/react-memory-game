import React, { useState, useEffect } from "react"
import { FiHexagon } from "react-icons/fi"

import classes from "./Card.module.css"
import dimensions from "../../styles/dimensions"
// import { backgroundUrl } from "../../data/data"

const totle_shift = dimensions.card_size + dimensions.card_margin
const helf_margin = dimensions.card_margin / 2

const Card = props => {
  const { show } = props
  // Note: There shoud be more elegant way, instead of using state.
  const [componentClicked, setComponentClicked] = useState(false)
  const card_classes = componentClicked
    ? show
      ? classes.flip_animation_class
      : classes.flip_animation_class_r
    : ""

  const topPos =
    Math.floor(props.index / dimensions.number_of_col) * totle_shift +
    helf_margin
  const leftPos =
    (props.index % dimensions.number_of_col) * totle_shift + helf_margin

  const onClicked = () => {
    if (props.clicked()) setComponentClicked(true)
  }

  const fontDiv = (
    <div className={classes.card_back_div}>
      <div style={{ backgroundImage: `url(${props.src})` }}></div>
    </div>
  )

  const backDiv = (
    <div className={classes.card_font_div}>
      <FiHexagon className={classes.card_bg_icon} />
    </div>
  )

  useEffect(() => {
    console.log("[Card]: useEffect")
  })

  return (
    <div
      onAnimationEnd={props.cardAnimationEnd}
      onClick={onClicked}
      className={`${classes.card} ${card_classes}`}
      style={{
        width: dimensions.card_size,
        height: dimensions.card_size,
        left: leftPos,
        top: topPos
      }}>
      <div className={`${classes.card_inner} ${card_classes}`}>
        {fontDiv}
        {backDiv}
      </div>
    </div>
  )
}

const cardPropsAreEqual = (prevNote, nextNote) => {
  return (
    prevNote.show === nextNote.show
    // &&
    // prevNote.animationFinished === nextNote.animationFinished
  )
}

export default React.memo(Card, cardPropsAreEqual)
