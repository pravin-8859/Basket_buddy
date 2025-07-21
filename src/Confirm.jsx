// import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck } from '@fortawesome/free-solid-svg-icons';
// import "./Confirm.css";
// import {Link} from "react-router-dom";

// function Confirm(){
//     return(
//         <div className="confirmPage">
//             <div className="icon">
//                 <FontAwesomeIcon icon={faCheck} size="2xl" />
//             </div>
            
//             <h2>Order Confirmed Successfully</h2>
//             <h3>Thanks For Shopping</h3>
//         </div>

//     );
// }

// export default Confirm;



import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import "./Confirm.css";
import {Link} from "react-router-dom";

function Confirm() {
    return (
        <div className="confirmContainer">
            <div className="icon">
                <FontAwesomeIcon icon={faCheck} size="3x" />
            </div>
            <h2>Order Confirmed Successfully</h2>
            <h3>Thanks for Shopping!</h3>
            <Link to="/confirm" className="goHomeButton">Go to Home</Link>
        </div>
    );
}

export default Confirm;

