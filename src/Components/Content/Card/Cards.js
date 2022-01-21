import "./Card.css"
import CardClass from "./CardClass/CardClass";

function Cards() {
    let cardItems = require("../../../utils/cardItems.json")

    return (cardItems && cardItems.map(cardItem =>
        <div className={"cards_block"}>
            <CardClass data={cardItem}/>
        </div>
    ));
}

export default Cards