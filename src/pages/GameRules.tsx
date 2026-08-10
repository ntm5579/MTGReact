import Nav from "../Components/Nav"
import ImgHover from "../Components/ImgHover"
import Hover from "../Models/Hover"

const deckHovers: Hover[] = [
    new Hover(undefined, "Prep Phase: The first phase of a turn. Used to reset from previous turns and prepare for the remainder of your turn.", { x: 0, y: 0 }, 150, 60, "gray"),
    new Hover(undefined, "Main Phase 1: Your first of two opportunities this turn to play creatures, enchantments, and sorceries. You can play as many cards as you would like, as long as you can pay the mana cost. You may also play a land card during your main phase, but you can only play one per turn (card abilities not withstanding)", { x: 0, y: 0 }, 60, 60),
    new Hover(undefined, "Combat Phase: The phase where you can attack your opponent with your creatures. Your opponent will have the opportunity to block your attacking creatures with their own.", { x: 0, y: 0 }, 240, 60, "red"),
    new Hover(undefined, "Main Phase 2: Your second of two opportunities this turn to play creatures, enchantments, and sorceries. Refer to main phase 1 for restrictions on what you can play.", { x: 0, y: 0 }, 60, 60),
    new Hover(undefined, "End Phase: The final phase of a turn. If you have more than 7 cards in your hand, you must put cards of your choosing into the graveyard until you are down to 7 cards.", { x: 0, y: 0 }, 60, 60, "gray")
]

function GameRules() {
  return (
    <>
        <Nav/>
        <div>
            <h1>Game Rules</h1>
                <h2>Starting the Game</h2>
                    <p>Draw 7 cards. Mulligan if you're not satisfied with your hand.</p>
                <h2>Turns</h2>
                    <p>Turns consist of 5 phases, some containing subphases.</p>
                    <div>
                        <ImgHover 
                            src="src/assets/CockatriceTurns.png" 
                            hovers={deckHovers}
                            height= "70vh"
                            tooltipLocation={"right"}
                        />
                    </div>
                <h3>Phases</h3>
                    <ol>
                        <li><h4>Prep</h4></li>
                            <p>The first phase of a turn. Used to reset from previous turns and prepare for the remainder of your turn.</p>
                            <ul>
                                <li><h5>Untap</h5></li>
                                <p>
                                    Various actions in the game result in cards becoming tapped, this generally signals they lose there ability to act that turn. 
                                    The untap step resets this to allow that card to act this turn. 
                                    This can be overriden by certain effects that prevent the untapping of cards (typically played by an opponent, 
                                    "target opponent does not untap target creature or all creatures during their next turn.")
                                </p>
                                <li><h5>Upkeep</h5></li>
                                <p>Various cards have counters that require maintenance during this phase, depending on the ability, you could be increasing or decreasing a counter.</p>
                                <li><h5>Draw</h5></li>
                                <p>Draw a card from the top of your library.</p>
                            </ul>
                        <li><h4>Main 1</h4></li>
                        <p>Your first of two oppurtunities this turn to play creatures, enchantments, and sorceries. You can play as many cards as you would like, as long as you can pay the mana cost. You may also play a land card during your main phase, but you can only play one per turn (card abilities not withstanding) </p>
                        <li><h4>Combat</h4></li>
                            <ul>
                                <li><h5>Start Combat</h5></li>
                                <li><h5>Attack</h5></li>
                                <p>Declare which creatures you are attacking with and which player or planeswalker you are targeting. Tap attacking creatures, unless it has vigilance, or there is another effect that prevents them from being tapped.</p>
                                <li><h5>Block</h5></li>
                                <p>Players that are being attacked can declare blockers, they must weigh damage, but also the effects of the attacking creature.</p>
                                <li><h5>Damage</h5></li>
                                <li><h5>End</h5></li>
                            </ul>
                        <li><h4>Main 2</h4></li>
                        <p>Your second of two oppurtunities this turn to play creatures, enchantments, and sorceries. Refer to main phase 1 for restrictions on what you can play.</p>
                        <li><h4>End</h4></li>
                        <p>If you have more than 7 cards in your hand, you must put cards of your choosing into the graveyard until you are down to 7 cards. However this can be offset if you have a card on the battlefield that adjusts your hand size.</p>
                    </ol>
        </div>
    </>
  )
}

export default GameRules