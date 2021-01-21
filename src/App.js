import "./App.css"
import React, { Component } from "react"

import Header from "./containers/Header"
import CardContainer from "./containers/CardContainer"
import ModalContainer from "./containers/ModalContainer"
import getShuffledCards from "./utils/getShuffledCards"

const timeStep = 1000

class App extends Component {
  state = {
    cards: getShuffledCards(),
    card_pair: [],
    flipped: 0,
    duration: 1220,
    win: false,
    timer: null
  }

  componentDidMount() {
    this.setState({
      timer: setInterval(this.timeIncrement, timeStep)
    })
  }

  timeIncrement = () => {
    this.setState(state => ({ duration: state.duration + timeStep }))
  }

  flippedIncrement = () => {
    this.setState(state => ({ flipped: state.flipped + 1 }))
  }

  updateCardPair = card => {
    this.setState(state => ({
      card_pair: [...state.card_pair, card.index]
    }))
  }

  showCard = theCard => {
    this.setState(state => ({
      cards: state.cards.map((card, index) => {
        if (index === theCard.index)
          return { ...card, show: true, animationFinished: false }
        else return card
      })
    }))
  }

  clearShowCardPair = () => {
    this.setState(state => ({
      cards: state.cards.map((card, index) => {
        if (index === state.card_pair[0] || index === state.card_pair[1]) {
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

  cardAnimationFinishedHandler = theCard => () => {
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
    const { cards, card_pair } = this.state
    if (
      card_pair.length < 2 ||
      !cards[card_pair[0]].animationFinished ||
      !cards[card_pair[1]].animationFinished
    )
      return
    // console.log("Checking same!")

    if (cards[card_pair[0]].id === cards[card_pair[1]].id) {
      // console.log("SAME: do something")
      this.setState({ card_pair: [] })
      this.setWinGame()
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
    clearInterval(this.state.timer)
    this.clearShowCardsHandler()
    this.setState({
      // cards: getShuffledCards(),
      card_pair: [],
      flipped: 0,
      duration: 0,
      win: false,
      timer: setInterval(this.timeIncrement, timeStep)
    })
  }

  // Check winning
  isAllCardsFlipped = () => {
    return this.state.cards.reduce((prev, now) => prev && now.show, true)
  }

  setWinGame = () => {
    const win = this.isAllCardsFlipped()
    this.setState({ win })
    if (win) clearInterval(this.state.timer)
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
          cardAnimationEnd={this.cardAnimationFinishedHandler}
          selectionEnd={this.selectionFinishedHandler}
        />
        {this.state.win ? (
          <ModalContainer
            flipped={this.state.flipped}
            duration={this.state.duration}
            reset={this.gameResetHandler}
          />
        ) : null}
      </div>
    )
  }
}

export default App
