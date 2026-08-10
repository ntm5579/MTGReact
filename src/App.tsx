import './App.css'

import Nav from './Components/Nav.tsx'

function App() {

  return (
    <>
      <Nav />
      <div>
        <h1>Learn how to play Magic: The Gathering</h1>

        <ul> To Do
          <li>All Pages: Improve Styling</li>
          <li>All Pages: Fix use of px to percents to avoid layout issues</li>
          <li>Nav: fix trapezoid</li>
          <li>Home Page: Add a landing page</li>
          <li>Formats Page: Make a standard component for formats and pass vars into each one. Number of players, deck size, and other rules can vary between formats.</li>
          <li>Game Rules Page: Fix tooltip arrow for right side tooltip on </li>
          <li>Game Rules Page: Make the 5 sections clickable and then make the subphases the hoverables </li>
          <li>Game Rules Page: Consolidate info at bottom of page into tooltips and remove stuff at bottom</li>
          <li>Cards Page: Fix Hover</li>
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
