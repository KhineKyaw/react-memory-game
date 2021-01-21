const card_size = 110
const card_margin = 16

// Note: use even numbers to get symmetric grid.
const number_of_row = 4
const number_of_col = 4

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
