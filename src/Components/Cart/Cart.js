import React from "react";
import './Cart.css'
function Cart(props){

    return(
        <div className={`cart_block ${props.opened ? 'cartOp' : ''}`}>
            
        </div>
    )
}
export default Cart