import retro from "../assets/retro.jpg"

function Card({ card, isFaceUp, onClick }) {
  return (
    <button
      className={isFaceUp ? "card flipped" : "card"}
      onClick={onClick}
    >
      <div className="card-inner">
        <img className="card-back" src={retro} alt="Bakside" />
        <img className="card-front" src={card.image} alt={card.name} />
      </div>
    </button>
  )
}

export default Card