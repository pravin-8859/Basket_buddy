import "./Signup.css"
import React from 'react';
import {Link} from "react-router-dom";
function Signup(){
    return(
        // <div className="Register">
        //     <h3 >Register</h3>

        //     <form>
        //         <label><h5>First Name</h5></label>
        //         <input type="text" className="Name"/>
        //         <label><h5>Last Name</h5></label>
        //         <input type="text" className="Name"/>

        //         <div c>
        //             <h5>Email Adress</h5>
        //             <input type="text" className="Name"/>
        //         </div>
        //         <div> 
        //             <h5>Password</h5>
        //             <input type="password" className="Name"/>
        //         </div>
        //         <button className="Register">Register</button>
        //     </form>
        // </div>




        
            // <div className="Register">
            //         <h3 >Register</h3>

            //     <h5>First Name</h5>
            //     <input type="text" />
            //    <h5>Last Name</h5>
            //     <input type="text"  />


            //       <div >
            //          <h5>Email Adress</h5>
            //          <input type="text"/>
            //      </div>
            //      <div> 
            //          <h5>Password</h5>
            //          <input type="password"/>
            //      </div>
            //      <button >Signup</button>

            // </div>


            <div>

                <div className="modal" >
        
            {/* <span class="close">&times;</span> */}
            <div className="logo">BasketBuddy</div>
            <h2>India's last minute app</h2>
            <p>Log in or Sign up</p>
            <input type="text" placeholder="+91 Enter mobile number" id="mobileNumber" />
          <Link to="/verificationpage">  <div><button className="continue-btn">Continue</button></div></Link>
            <h6>By continuing, you agree to our Terms of service & Privacy policy </h6>
        
    </div>
    
            </div>
        
    );
}

export default Signup;
