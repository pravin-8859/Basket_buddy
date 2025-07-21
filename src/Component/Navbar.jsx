import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <div>
            <h1>joo</h1>
            <Link to="/">
            Home
            </Link>

            <Link to="/about">
            About
            </Link>

            <Link to="/contact">
            Contact
            </Link>

            <Link to="/products">
            Products
            </Link>

        </div>
    );
}

export default Navbar;