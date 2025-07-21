import "./Dairypage.css";
import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines, faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faThreads } from '@fortawesome/free-brands-svg-icons';



function Snacks(){
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
                      <a href="#Features">Features</a>
                      <a href="#Products">Products</a>
                      <a href="#Categories">Categories</a>
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
                            <img src="32.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="33.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="34.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="35.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="36.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="37.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="38.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        
                        <div className="milk_img">
                            <img src="39.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="40.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="41.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="42.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="43.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="44.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="45.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="46.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="47.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="48.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="49.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
            
                        <div className="milk_img">
                            <img src="50.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="51.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="52.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="53.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="54.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="55.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="56.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="57.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="58.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="59.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="60.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="61.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="62.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                        <div className="milk_img">
                            <img src="63.avif" height="100rem" width="110rem"/>
                            <h3>Amul Milk</h3>
                            <div className="weight"><h6>500g</h6></div>
                            <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                        </div>
                    </div>

<div className="condition">
            <h1>Buy Snacks and Munchies at Online Grocery Store in India</h1>
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


export default Snacks;