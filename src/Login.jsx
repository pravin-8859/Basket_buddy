import "./Login.css";
import React from "react";
import {Link} from "react-router-dom";
let styles ={backgroundColor:"red"};

function Login(){

    return(
        <div>
         <form className="login">
          <h3>Login Now</h3>
          <div>
          <input type="text" placeholder="username"  className="input1" />
          </div>
          <div>
            <input type="password" placeholder="Password" className="input2"  />
          </div>
          <div className="submit">
            <Link to="title"><button type="submit">Submit</button></Link>
          </div>
          <div>
            <h4>Forget password? SignUp</h4>
          </div>
          
          <Link to="/signup"><button className="signup" style={styles}>Signup</button></Link>
        </form>
        </div>
    );
}

export default Login






