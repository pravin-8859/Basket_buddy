import "./Verification.css";
import React from 'react';
import {Link} from "react-router-dom";
function Verificationpage(){
    return(
        
 
<div className="heading">
  
    
    <h1>OTP Verification</h1>
  
  <div >
    <p >We have sent a verification code to</p>
    <p >+91-8529440855</p>
    <form  >
      <input inputmode="numeric" />
      <input inputmode="numeric"   />
      <input inputmode="numeric"  />
      <input inputmode="numeric" />
    </form>
  <Link to="/title" > <button>Done</button></Link>
    <p className="resend">Resend Code</p>
  </div>
</div>
       
        
    );
}


export default Verificationpage;