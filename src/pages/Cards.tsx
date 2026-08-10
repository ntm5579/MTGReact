import Nav from "../Components/Nav"

function Cards() {
  return (
    <>
      <Nav/>
      <div>
        <h1>Cards</h1>
          <h2>Card Types</h2>
            <h3>Lands</h3>
            <h3>Creatures</h3>
            <h3>Enchantments</h3>
              <h4>Auras</h4>
            <h3>Sorceries</h3>
            <h3>Artifacts</h3>
            <h3>Planeswalkers</h3>
            <h3>Sagas</h3>
          <h2>How to Read a Card</h2>
            <h3>Mana Cost</h3>
            <h3>Power/Toughness</h3>
            <h3>Creature Type</h3>
            <h3>Abilities/Effects</h3>
          
          <h2>Popular Card Effects</h2>
          <p>Sometimes cards list one word, which is the name of the effect. These effects are standard across different cards, and allow the cards to reduce the amount of text.</p>
          <ul>
            <li>Flying</li>
            <li>Trample</li>
            <li>Vigilance</li>
            <li>Deathtouch</li>
            <li>Reach</li>
          </ul>
      </div>
    </>
  )
}

export default Cards