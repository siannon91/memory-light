export const symbols = [
  { name: "libro", emoji: "📖" },
  { name: "sciarpa", emoji: "🧣" },
  { name: "biscotto", emoji: "🍪" },
  { name: "tea", emoji: "🍵" },
  { name: "pupazzo", emoji: "⛄" },
  { name: "giornale", emoji: "📰" },
  { name: "neve", emoji: "❄️" },
  { name: "natale", emoji: "🎄" },
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