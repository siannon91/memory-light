import retro from "../assets/retro.jpg"

function Card({ card, isFaceUp, onClick }) {
  return (
    <button onClick={onClick}>
      <img
        src={isFaceUp ? card.image : retro}
        alt={isFaceUp ? card.name : "Bakside"}
        width="100"
      />
    </button>
  )
}

export default Card