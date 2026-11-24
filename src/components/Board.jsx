import Card from "./Card"

function Board({ cards, flipped, matched, onCardClick }) {
  return (
    <div className="board">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          isFaceUp={flipped.includes(card.id) || matched.includes(card.id)}
          onClick={() => onCardClick(card)}
        />
      ))}
    </div>
  )
}

export default Board