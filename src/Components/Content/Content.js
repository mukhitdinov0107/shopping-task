import "./Content.css"
import Card from "./Card/Card"
import Filter from "./Filter/Filter"

function Content() {
    return (
        <div className={"Content"}>
            <Filter/>
            <Card/>
        </div>
    )
}

export default Content