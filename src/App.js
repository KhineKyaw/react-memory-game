import "./App.css"
import React, { Component } from "react"

import Header from "./containers/Header"
import CardContainer from "./containers/CardContainer"
import getShuffledCards from "./utils/getShuffledCards"

class App extends Component {
  state = {
    cards: getShuffledCards(),
    card_pair: [],
    duration: 0
  }

  updateCardPair = card => {
    this.setState(state => ({
      card_pair: [...state.card_pair, card]
    }))
  }

  showCard = theCard => {
    this.setState(state => ({
      cards: state.cards.map((card, index) => {
        if (index === theCard.index) return { ...card, show: true }
        else return card
      })
    }))
  }

  clearShowCardPair = () => {
    this.setState(state => ({
      cards: state.cards.map((card, index) => {
        if (
          index === state.card_pair[0].index ||
          index === state.card_pair[1].index
        ) {
          return { ...card, show: false }
        } else return card
      }),
      card_pair: []
    }))
  }

  cardOnClickedHandler = theCard => () => {
    // Prevent from clicking, selected 2 cards
    if (theCard.show || this.state.card_pair.length >= 2) return
    console.log("ONclick: Fire")
    this.showCard(theCard)
    this.updateCardPair(theCard)
  }

  selectionFinishedHandler = () => {
    console.log("Finished")
    const { card_pair } = this.state
    if (card_pair.length < 2) return

    if (card_pair[0].id === card_pair[1].id) {
      console.log("SAME: do something")
      this.setState(state => ({ card_pair: [] }))
    } else {
      this.clearShowCardPair()
    }
  }

  render() {
    console.log(this.state.card_pair)
    return (
      <div className='App'>
        <Header />
        <CardContainer
          cards={this.state.cards}
          clicked={this.cardOnClickedHandler}
          animationEnd={this.selectionFinishedHandler}
        />
      </div>
    )
  }
}

export default App
