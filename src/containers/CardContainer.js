import React, { useEffect } from "react"

import Card from "../components/Card/Card"
import dimensions from "../styles/dimensions"

const CardContainer = props => {
  const { cards, card_pair, selectionEnd, gameWin } = props

  const cardsComp = cards.map((card, index) => (
    <Card
      key={card.id + index}
      clicked={props.clicked(card)}
      cpAnimationEnd={props.cpAnimationEnd(card)}
      cardAnimationEnd={props.cardAnimationEnd(card)}
      gameWin={props.gameWin}
      flipped={props.flipped}
      {...card}
    />
  ))

  useEffect(() => {
    // console.log("Selectin finished")
    selectionEnd()
  }, [cards, card_pair, selectionEnd])

  useEffect(() => {
    if (
      card_pair.length === 2 &&
      card_pair[0].animationFinished &&
      card_pair[1].animationFinished
    )
      gameWin()
  }, [card_pair, gameWin])

  return (
    <div className='cards-container'>
      <div
        className='cards-container-inner'
        style={{
          width: dimensions.container_width,
          height: dimensions.container_height
        }}>
        {cardsComp}
      </div>
    </div>
  )
}

export default CardContainer
