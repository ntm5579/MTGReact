import './App.css'

import Nav from './Components/Nav.tsx'

function App() {

  return (
    <>
      <Nav />
      <div>
        <h1>Welcome to the App</h1>
          <ul>
            <li>
              Game
            </li>
              <ul>
                <li>Starting a Game</li>
                  <ul>
                    <li>starting hand</li>
                    <li>order</li>
                  </ul>
                <li>Turns</li>
                  <ul>
                    <li>Phases</li>
                  </ul>
              </ul>

          <li>Formats</li>
              <ul>
                <li>1's</li>
                <li>commander</li>
              </ul>

          <li>Cards</li>
              <ul>
                <li>How to read a card</li>
                <li>Common Effects</li>
                  <ul>
                    <li>Proliferate</li>
                  </ul>
              </ul>

          <li>Building A Deck</li>

        </ul>
      </div>
    </>
  )
}

export default App
