import { Link } from 'react-router-dom'
function Nav() {
    return (
        <nav>
          <Link to="/">Home</Link>
          <Link to="/game-rules">Game Rules</Link>
          <Link to="/formats">Formats</Link>
          <Link to="/cards">Cards</Link>
          <Link to="/building-a-deck">Building a Deck</Link>
          <Link to="/how-to-play">How to Play</Link>
        </nav>
    )
}

export default Nav