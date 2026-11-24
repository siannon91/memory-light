function Card({ card, isFaceUp, onClick }) {
  return (
    <button onClick={onClick}>
      {isFaceUp ? card.emoji : "❓"}
    </button>
  )
}

export default Card