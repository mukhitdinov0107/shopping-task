import react, {useState} from "react";
import "../Card.css"
function CardClass(props) {
    const [favourite, setFavourite] = useState(false);
    
    return (<div className="card">
        <img width={133} height={112} src={props.data.imageUrl} alt=""/>
        <h5>{props.data.title}</h5>
        <div className="d-flex justify-between align-senter">
            <div className="d-flex flex-column">
                <span> Стоимость: </span>
                <b>{props.data.price}</b>
            </div>
            <button className="button" onClick={() => setFavourite(!favourite)}>
            {favourite 
            ? <img src={props.data.checkedUrl} key={props.data.id} alt=""/>
            : <img src={props.data.buttonUrl} key={props.data.id}  alt=""/> 
                }
            </button>
        </div>
    </div>
    )};
export default CardClass;