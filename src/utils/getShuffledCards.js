import knuthShuffle from "../utils/knuthShuffle"
import DATA from "../data/data"
import dimensions from "../styles/dimensions"

const selected = DATA.slice(0, dimensions.totle_cards / 2).map(card => ({
  ...card,
  show: false
}))

const getShuffledCards = () => {
  return knuthShuffle(selected.concat(selected)).map((card, index) => ({
    ...card,
    index
  }))
}

export default getShuffledCards
