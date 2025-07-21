import "./Dairypage.css";
import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines, faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faThreads } from '@fortawesome/free-brands-svg-icons';


function Freshpage(){
    return(
        <div>

        <header className="dairyheader">
             <h1 className="dairyBasketBuddy">BasketBuddy</h1>

              <div ><Link to="/changeAddress" Style="color:black">
                     <h2 >Delivery in 15 min</h2>
                         <h6>42G9+7Q4, Devri Rd,Taal..</h6>
                     </Link>
                     </div>

         <nav className="dairynav">
          <Link to="/titlepage">Home</Link>
                    <Link to="/freshpage">Fresh</Link>
                    <Link to="/menupage">Products</Link>
                    <Link to="/categorypage">Categories</Link>
          <a href="#Review">Review</a>
          <a href="#Blogs">Blogs</a>
        </nav>

         <div className="dairyicons">
          <Link><FontAwesomeIcon icon={faGripLines} className="i"  /></Link> 
          <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} id="Shopping_icon" className="i" /></Link>
          <Link><FontAwesomeIcon icon={faCircleUser } id="Login_icon" className="i"  /></Link>
        </div>
        </header>
         

        <h1 className="dairyheading">Dairy, Eggs & More</h1>

        <div>
            <div className="dairylist">
           
            <div className="milk_img">
                <img src="milk.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="1.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="2.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="3.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="4.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="5.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="6.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            
            <div className="milk_img">
                <img src="7.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="8.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="9.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="10.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="11.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="12.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="13.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="14.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="15.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="16.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="17.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>

            <div className="milk_img">
                <img src="18.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="19.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="20.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="21.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="22.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="23.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="24.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="25.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="26.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="27.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="28.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="29.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="30.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="31.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
        </div>

<div className="condition">
            <h1>Buy Fresh Fruits and Vegetables at Online Grocery Store in India</h1>
            <p>
                Are you super fond of online shopping because you hate crowded supermarkets? Now you don't need to worry as Blinkit is delivering Dog Food & Treats at your doorstep superfast with easy returns for your complete peace of mind. 
                Get Dog Food & Treats delivered to your home in minutes. You can check Dog Food & Treats price before buying.
            </p>
            <p>
                We deliver Dog Food & Treats at Delhi, Gurgaon, Kolkata, Lucknow, Mumbai, Bengaluru, Ahmedabad, Noida, Ghaziabad, Faridabad, Hyderabad, Jaipur, Pune, Chennai, Chandigarh, Ludhiana, Vadodara, Meerut, Kanpur, Panchkula, Kharar, Amritsar, Bhopal, Indore, Zirakpur, Jalandhar, Dehradun, Agra, Mohali, Goa, Patiala, Sonipat, Bhiwadi, Kota, Rohtak, Bahadurgarh, Haridwar, Bathinda, Kochi, Jodhpur.
            </p>
            <p>Buy from several popular brands like <strong>HUFT</strong>, <strong>Pedigree</strong>, <strong>Kennel Kitchen</strong>.</p>
            <h2>Dog Food & Treats Price List</h2>
            
            <p>This data was last updated on 19/7/2025</p>
        </div>



        </div>

<footer>
            <div className="footer_icons">
               <FontAwesomeIcon icon={faFacebook} className="fa-2xl" />
                <FontAwesomeIcon icon={faThreads} className="fa-2xl" />
                <FontAwesomeIcon icon={faInstagram} className="fa-2xl" />
                <FontAwesomeIcon icon={faTwitter} className="fa-2xl" />
            </div>

            <div className="list">
                <h2>List</h2>
                <a href="#">Vegetables</a>
                <a href="#">Eggs</a>
                <a href="#">Dairy</a>
                <a href="#">Coldrinks</a>
                <a href="#">Fruits</a>
            </div>

            <div className="help">
                <h2>Get Help</h2>
                <a href="#">Terms</a>
                <a href="#">Privacy</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
                <a href="#">FAQ's</a>
            </div>
        </footer>

        </div>
    );
}


export default Freshpage;