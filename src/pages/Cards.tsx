import Nav from "../Components/Nav"
import ImgHover from "../Components/imgHover"
import Hover from "../Models/Hover"
import "../Components/Cards.css"

const cardHovers: Hover[] = [
  new Hover("Name", "The name of the card.", { x: 25, y: 25 }, 25, 200), 
  new Hover("Mana Cost", "The amount of mana required to play the card.", { x: 295, y: -5 }, 25, 70),
  new Hover("Card Type", "The category of the card. Scroll Down to learn more about each card type.", { x: 25, y: 245 }, 25, 75), 
  new Hover("Secondary Type", "An additional category for the card. Sometime this is used by other cards to apply additional effects.", { x: 121, y: 215 }, 25, 60), 
  new Hover("Text Box", "The description and rules text of the card. Includes keywords (such as flying or trample), effects upon creature entering the battlefield, and any abilities that the creature can activate.", { x: 30, y: 220 }, 165, 325),
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}>
              <ImgHover 
                src="src/assets/CreatureCard.png" 
                hovers={cardHovers} 
                width={"42vh"} 
                height={"60vh"} 
              />
            </div>
          <br></br>
          
          <h2>Card Types</h2>
            <div 
              style= {{display: "grid"}}
            >
              <h3 className="card-type">Lands</h3>
              <h3 className="card-type">Creatures</h3>
              <h3 className="card-type">Enchantments</h3>
                <h4 className="card-subtype">Auras</h4>
              <h3 className="card-type">Sorceries</h3>
              <h3 className="card-type">Artifacts</h3>
              <h3 className="card-type">Planeswalkers</h3>
              <h3 className="card-type">Sagas</h3>
            </div>
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