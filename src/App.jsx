import { useState, useEffect } from "react"
import { createDeck, shuffle } from "./data/cards"
import Board from "./components/Board"

function App() {
  const [cards, setCards] = useState(() => shuffle(createDeck()))
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [moves, setMoves] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [started, setStarted] = useState(false)

  function handleCardClick(card) {
    if (flipped.length === 2) return
    if (flipped.includes(card.id)) return
    if (matched.includes(card.id)) return

    setStarted(true)
    setFlipped([...flipped, card.id])
  }

  function resetGame() {
    setCards(shuffle(createDeck()))
    setFlipped([])
    setMatched([])
    setMoves(0)
    setSeconds(0)
    setStarted(false)
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

  const isWon = matched.length === cards.length

   useEffect(() => {
    if (!started || isWon) return

    const interval = setInterval(() => {
      setSeconds((s) => s + 1)
    }, 1000)

    return () => clearInterval(interval)
   }, [started, isWon])

  return (
    <div className="game">
      <h1>Memory Game</h1>
      <p>Trekk: {moves} - Tid: {seconds} s</p>
          
      <div className={isWon ? "app won" : "app"}>
        <div className="play-area">
          <Board
            cards={cards}
            flipped={flipped}
            matched={matched}
            onCardClick={handleCardClick}
          />
          {isWon && (
            <p className="win-message">
              Gratulerer! Du fant alle parene på {moves} trekk og {seconds} sekunder!
            </p>
          )}
        </div>
        <button className="new-game" onClick={resetGame}>Nytt spill</button>
      </div>
    </div>
  )
}

export default App