import { useState, useEffect } from "react"

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

  function resetGame() {
    setCards(shuffle(createDeck()))
    setFlipped([])
    setMatched([])
    setMoves(0)
  }

  useEffect(() => {
    if (flipped.length !== 2) return

    setMoves((m) => m + 1)

    const [first, second] = flipped
    const firstCard = cards.find((c) => c.id === first)
    const secondCard = cards.find((c) => c.id === second)

    if (firstCard.name === secondCard.name) {
      setMatched((prev) => [...prev, first, second])
      setFlipped([])
    } else {
      setTimeout(() => {
        setFlipped([])
      }, 1000)
    }
  }, [flipped, cards])

  return (
    <div>
      <h1>Memory Light</h1>
      <p>Trekk: {moves}</p>
      <button onClick={resetGame}>Nytt spill</button>
      <div>
        {cards.map((card) => (
          <button key={card.id} onClick={() => handleCardClick(card)}>
            {flipped.includes(card.id) || matched.includes(card.id) ? card.emoji : "❓"}
          </button>
        ))}
      </div>
      {matched.length === cards.length && (
        <p>Gratulerer! Du fant alle parene på {moves} trekk!</p>
      )}
    </div>
  )
}

export default App