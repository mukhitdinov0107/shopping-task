import "./Card.css"

function Cards() {
    return(
        <div className="card">
            <img width={133} height={112} src="" alt=""/>
            <h5> LAPTOP StrIX</h5>
            <div className="d-flex justify-between align-senter">
                <div className="d-flex flex-column">
                    <span> Стоимость: </span>
                    <b>00000</b>
                </div>
                <button className="button">
                    <i className="far fa-plus-square"/>
                </button>
            </div>
        </div>
    )
}

export default Cards