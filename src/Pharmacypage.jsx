import "./Dairypage.css";
import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines, faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faThreads } from '@fortawesome/free-brands-svg-icons';


function Pharmacypage(){
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
         

        <h1 className="dairyheading">Pharmacy & Healthcare</h1>

        <div>
            <div className="dairylist">
           
            <div className="milk_img">
                <img src="170.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="171.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="172.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="173.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="174.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="175.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="176.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            
            <div className="milk_img">
                <img src="177.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="178.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="179.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="180.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="181.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="182.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="183.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="184.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="185.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="186.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="187.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>

            <div className="milk_img">
                <img src="188.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="189.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="190.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="191.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="192.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="193.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="194.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            </div>
            <div className="condition">
            <h1>Buy Mask & Sainitizers at Online Grocery Store in India</h1>
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


export default Pharmacypage;