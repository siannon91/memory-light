import { useState } from "react"

const symbols = [
  { name: "libro", emoji: "📖" },
  { name: "sciarpa", emoji: "🧣" },
  { name: "biscotto", emoji: "🍪" },
  { name: "tea", emoji: "🍵" },
  { name: "pupazzo", emoji: "⛄" },
  { name: "giornale", emoji: "📰" },
  { name: "neve", emoji: "❄️" },
  { name: "natale", emoji: "🎄" },
]

function createDeck() {
  const deck = []
  symbols.forEach((symbol, index) => {
    deck.push({ id: index * 2, ...symbol })
    deck.push({ id: index * 2 + 1, ...symbol })
  })
  return deck
}

function shuffle(cards) {
  const copy = [...cards]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = copy[i]
    copy[i] = copy[j]
    copy[j] = temp
  }
  return copy
}

function App() {
  const [cards, setCards] = useState(() => shuffle(createDeck()))
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [moves, setMoves] = useState(0)

  function handleCardClick(card) {
    if (flipped.length === 2) return
    if (flipped.includes(card.id)) return
    if (matched.includes(card.id)) return

    setFlipped([...flipped, card.id])
  }

  return (
    <div>
      <h1>Memory Light</h1>
      <div>
        {cards.map((card) => (
          <button key={card.id} onClick={() => handleCardClick(card)}>
            {flipped.includes(card.id) || matched.includes(card.id) ? card.emoji : "❓"}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App