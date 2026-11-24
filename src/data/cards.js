import libro from "../assets/libro.jpg"
import sciarpa from "../assets/sciarpa.jpg"
import biscotto from "../assets/biscotto.jpg"
import tea from "../assets/tea.jpg"
import pupazzo from "../assets/pupazzo.jpg"
import giornale from "../assets/giornale.jpg"
import neve from "../assets/neve.jpg"
import natale from "../assets/natale.jpg"

export const symbols = [
  { name: "libro", emoji: "📖", image: libro },
  { name: "sciarpa", emoji: "🧣", image: sciarpa },
  { name: "biscotto", emoji: "🍪", image: biscotto },
  { name: "tea", emoji: "🍵", image: tea },
  { name: "pupazzo", emoji: "⛄", image: pupazzo },
  { name: "giornale", emoji: "📰", image: giornale },
  { name: "neve", emoji: "❄️", image: neve },
  { name: "natale", emoji: "🎄", image: natale },
]

export function createDeck() {
  const deck = []
  symbols.forEach((symbol, index) => {
    deck.push({ id: index * 2, ...symbol })
    deck.push({ id: index * 2 + 1, ...symbol })
  })
  return deck
}

export function shuffle(cards) {
  const copy = [...cards]
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = copy[i]
    copy[i] = copy[j]
    copy[j] = temp
  }
  return copy
}