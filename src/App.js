import "./App.css"
import React, { Component } from "react"

import Header from "./containers/Header"
import CardContainer from "./containers/CardContainer"
import ModalContainer from "./containers/ModalContainer"
import getShuffledCards from "./utils/getShuffledCards"

class App extends Component {
  state = {
    cards: getShuffledCards(),
    card_pair: [],
    flipped: 0,
    duration: 0,
    win: true
  }

  flippedIncrement = () => {
    this.setState(state => ({ flipped: state.flipped + 1 }))
  }

  updateCardPair = card => {
    this.setState(state => ({
      card_pair: [...state.card_pair, { ...card, animationFinished: false }]
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
    // Prevent from seleting more then 2 cards
    const { card_pair } = this.state
    if (theCard.show || card_pair.length >= 2) return
    // console.log("ONclick: Fire")
    this.showCard(theCard)
    this.updateCardPair(theCard)
    this.flippedIncrement()
    return true
  }

  cpAnimationFinishedHandler = theCard => () => {
    this.setState(state => ({
      card_pair: state.card_pair.map(card => {
        if (card.index === theCard.index)
          return { ...card, animationFinished: true }
        else return card
      })
    }))
  }

  cardAnimationFinishedHandler = theCard => () => {
    console.log("cardAni: ", theCard)
    this.setState(state => ({
      cards: state.cards.map(card => {
        if (card.index === theCard.index)
          return { ...card, animationFinished: true }
        else return card
      })
    }))
  }

  selectionFinishedHandler = () => {
    // console.log("Finished")
    const { card_pair } = this.state
    if (
      card_pair.length < 2 ||
      !card_pair[0].animationFinished ||
      !card_pair[1].animationFinished
    )
      return
    // console.log("Checking same!")

    if (card_pair[0].id === card_pair[1].id) {
      // console.log("SAME: do something")
      this.setState({ card_pair: [] })
    } else {
      this.clearShowCardPair()
    }
  }

  clearShowCardsHandler = () => {
    this.setState(state => ({
      cards: state.cards.map(card => ({
        ...card,
        show: false,
        animationFinished: false
      }))
    }))
  }

  gameResetHandler = () => {
    this.clearShowCardsHandler()
    this.setState({
      // cards: getShuffledCards(),
      card_pair: [],
      flipped: 0,
      duration: 0,
      win: false
    })
  }

  // Check winning
  isAllCardsFlipped = () => {
    return this.state.cards.reduce((prev, now) => prev && now.show, true)
  }

  winningGameHandler = () => {
    console.log("Win checked!")
    const win = this.isAllCardsFlipped()
    this.setState({ win })
    return win
  }

  render() {
    // console.log("APP: ", this.state.card_pair)
    return (
      <div className='App'>
        <Header
          flipped={this.state.flipped}
          duration={this.state.duration}
          reset={this.gameResetHandler}
        />
        <CardContainer
          cards={this.state.cards}
          card_pair={this.state.card_pair}
          flipped={this.state.flipped}
          clicked={this.cardOnClickedHandler}
          cpAnimationEnd={this.cpAnimationFinishedHandler}
          cardAnimationEnd={this.cardAnimationFinishedHandler}
          selectionEnd={this.selectionFinishedHandler}
          gameWin={this.winningGameHandler}
        />
        {this.state.win ? (
          <ModalContainer reset={this.gameResetHandler} />
        ) : null}
      </div>
    )
  }
}

export default App
