import React from "react"

import Card from "../components/Card/Card"
import DATA from "../data/data"
import dimensions from "../styles/dimensions"

const CardContainer = props => {
  const cards = DATA.slice(0, dimensions.totle_cards).map((card, index) => (
    <Card key={card.id} index={index} {...card} />
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
