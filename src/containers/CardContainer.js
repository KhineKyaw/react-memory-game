import React from "react"

import Card from "../components/Card/Card"
import dimensions from "../styles/dimensions"

const CardContainer = props => {
  const cards = props.cards.map((card, index) => (
    <Card
      key={card.id + index}
      clicked={props.clicked(card)}
      animationEnd={props.animationEnd}
      {...card}
    />
  ))

  return (
    <div className='cards-container'>
      <div
        className='cards-container-inner'
        style={{
          width: dimensions.container_width,
          height: dimensions.container_height
        }}>
        {cards}
      </div>
    </div>
  )
}

export default CardContainer
