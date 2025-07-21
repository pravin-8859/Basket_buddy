import "./Cart.css";
import React from "react";
import {Link} from "react-router-dom";


function Cart(){
    return(
        
            <div className="shopping_cart">
                <h1>Add To Cart</h1>
            <div className="box">
                <img src="milk.avif" height="150px" width="120px" />
                <div className="para">
                    <h6>Orange</h6>
                    <span>prc-30</span>
                    <span>Qty.-1</span>
                </div>
            </div>
            <div className="box">
                <img src="namkeen1.avif" height="150px" width="120px" />
                <div  className="para">
                    <h6>Orange</h6>
                    <span>prc-40</span>
                    <span>Qty.-1</span>
                </div>
            </div>
            <div className="box">
                <img src="fantasy.avif" height="150px" width="120px"/>
                <div className="para">
                    <h6>Orange</h6>
                    <span>prc-50</span>
                    <span>Qty.-1</span>
                </div>
            </div> 

            <div className="total" >
                <h4>total = 120</h4>
            </div >
            <div className="checkout">
                <Link to="/payment">CheckOut</Link>
            </div>
        </div>
    );
}

export default Cart;