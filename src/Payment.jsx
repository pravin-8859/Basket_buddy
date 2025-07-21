import "./Payment.css";
import React from "react";
import {Link} from "react-router-dom";


function Payment(){
    return(
        <div className="payment">
        <h2>Payment Information</h2>
        <h5 className="input">Email</h5>
        <input type="text" placeholder="@gmail.com" className="input"/>
        <h5 className="input">Payment method</h5>
        <input type="text" placeholder="payment methos" className="input"/>
        <h5 className="input">Card Number</h5>
        <input type="number" placeholder="234567890" className="input"/>
        <h5 className="input">Name On Card</h5>
        <input type="text" placeholder="shourav" className="input"/>
        <h5 className="input">Expiration Date</h5>
         <input type="number" placeholder="MM/DD"  className="input"/> 
         <h5 className="input">security Code</h5>
         <input type="number" placeholder="1234" className="input"/> 
         <div className="method"><Link to="/cashpage">Choose another method</Link></div>
         <Link to="/confirm"><button className="input" >Pay Now</button></Link>
        </div>
    );
}

export default Payment;