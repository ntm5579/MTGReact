import Nav from "../Components/Nav"
import ImgHover from "../Components/imgHover"
import Hover from "../Models/Hover"

function Cards() {
  return (
    <>
      <Nav/>
      <div>
        <h1>Cards</h1>
          <h2>How to Read a Card</h2>
            <ImgHover 
              src="src/assets/CreatureCard.png" 
              hovers={[
                new Hover("Name", { x: 25, y: 25 }, 25, 200), 
                new Hover("Mana Cost", { x: 295, y: -5 }, 25, 70),
                new Hover("Card Type", { x: 25, y: 245 }, 25, 75), 
                new Hover("Secondary Type", { x: 121, y: 215 }, 25, 60), 
                new Hover("Text Box", { x: 30, y: 220 }, 165, 325), 
                new Hover("Power/Toughness", { x: 315, y:190 }, 25, 40)
              ]} 
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