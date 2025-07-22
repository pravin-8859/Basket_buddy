import "./Cashpage.css";

import React from 'react';
import {Link} from "react-router-dom";
function Cashpage(){
    return(
        <div>
            <div className="fulldelivery">
            <div className="Delivery">
                      <h2 >Delivery Information</h2>
                        
                                <div>
                                    <h3 class="font-medium text-gray-800">Shipping Address</h3>
                                    <p class="text-gray-600">123 Main Street, Agra<br/>Uttar pradesh<br/>India</p>
                                </div>     
                                
                                <div>
                                    <h3 class="font-medium text-gray-800">Contact Information</h3>
                                    <p class="text-gray-600">Shourav<br/>Shourav@gmail.com<br/>+91-8451548151</p>
                                </div>
  
                                <div>
                                    <h3 class="font-medium text-gray-800">Estimated Delivery</h3>
                                    <p class="text-gray-600">2-3 business days</p>
                                </div>
                           
                    </div>
  <div className="Cashdelivery">
    <div>
         <h2 c>Cash on Delivery</h2>

 </div >
                            <div>
                                <h3 >Pay when your order arrives</h3>
                                <p >You'll pay the delivery person when you receive your items. Please have the exact amount ready.</p>
                            </div>

                                <div >
                                    <p >
                                        Cash on delivery orders require signature upon receipt. Additional fees may apply for returns or refused deliveries.
                                    </p>
                                 </div>
                        <div >
                            <input/>
                            <label >
                                I agree to the Terms of Service and Privacy Policy
                            </label>
                        </div>
                        
                       <Link to="/confirm"> <button >
                            Confirm Order
                        </button></Link>
                        
                        <div >
                            <a href="#" >Choose another payment method</a>
                        </div>
                        </div>
    </div>
</div>
    );
}

export default Cashpage;