import './App.css'

import Nav from './Components/Nav.tsx'

function App() {

  return (
    <>
      <Nav />
      <div>
        <h1>Learn how to play Magic: The Gathering</h1>
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

        <ul> To Do
          <li>All Pages: Improve Styling</li>
          <li>All Pages: Fix use of px to percents to avoid layout issues</li>
          <li>Nav: fix trapezoid</li>
          <li>Formats Page: Make a standard component for formats and pass vars into each one. Number of players, deck size, and other rules can vary between formats.</li>
          <li>Game Rules Page: Fix tooltip arrow for right side tooltip on </li>
          <li>Game Rules Page: Make the 5 sections clickable and then make the subphases the hoverables </li>
          <li>Game Rules Page: Consolidate info at bottom of page into tooltips and remove stuff at bottom</li>
          <li>Cards Page: Card Types Grid</li>
          <li>Cards Page: Flesh out common card effects</li>
          <li>How to Play Page: Get links</li>
        </ul>

        <ul> Completed
          <li>Card Diagram with hover descriptions</li>
          <li>Game Rules with hover descriptions</li>
        </ul>
      </div>
    </>
  )
}

export default App
