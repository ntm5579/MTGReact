import Nav from "../Components/Nav"
import ImgHover from "../Components/imgHover"
import Hover from "../Models/Hover"

const cardHovers: Hover[] = [
  new Hover("Name", "The name of the card.", { x: 25, y: 25 }, 25, 200), 
  new Hover("Mana Cost", "The amount of mana required to play the card.", { x: 295, y: -5 }, 25, 70),
  new Hover("Card Type", "The category of the card.", { x: 25, y: 245 }, 25, 75), 
  new Hover("Secondary Type", "An additional category for the card.", { x: 121, y: 215 }, 25, 60), 
  new Hover("Text Box", "The description and rules text of the card.", { x: 30, y: 220 }, 165, 325),
  new Hover("Stats", "The power and toughness of the creature.", { x: 315, y:190 }, 25, 40)
];

function Cards() {
  return (
    <>
      <Nav/>
      <div>
        <h1>Cards</h1>
          <h2>How to Read a Card</h2>
            <p>Hover over the encircled areas to read more about each part of a card.</p>
            <ImgHover 
              src="src/assets/CreatureCard.png" 
              hovers={cardHovers} 
              width={"42vh"} 
              height={"60vh"} 
            />
          <h2>Card Types</h2>
            <h3>Lands</h3>
            <h3>Creatures</h3>
            <h3>Enchantments</h3>
              <h4>Auras</h4>
            <h3>Sorceries</h3>
            <h3>Artifacts</h3>
            <h3>Planeswalkers</h3>
            <h3>Sagas</h3>
          
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