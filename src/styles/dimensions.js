const card_size = 120
const card_margin = 20
const number_of_row = 4
const number_of_col = 6

const dimensions = {
  card_size: card_size,
  card_margin: card_margin,
  number_of_row: number_of_row,
  number_of_col: number_of_col,
  totle_cards: number_of_row * number_of_col,
  container_width: (card_size + card_margin) * number_of_col,
  container_height: (card_size + card_margin) * number_of_row
}

export default dimensions
