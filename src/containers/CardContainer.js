import React, { useEffect } from "react"

import Card from "../components/Card/Card"
import dimensions from "../styles/dimensions"

const CardContainer = props => {
  const { cards, card_pair, selectionEnd } = props

  const cardsComp = cards.map((card, index) => (
    <Card
      key={card.id + index}
      clicked={props.clicked(card)}
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
