import "./Dairypage.css";
import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines, faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faThreads } from '@fortawesome/free-brands-svg-icons';


function Panpage(){
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
         

        <h1 className="dairyheading">Pan Corner</h1>

        <div>
            <div className="dairylist">
           
            <div className="milk_img">
                <img src="203.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="211.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="206.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="203.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="204.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="205.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="206.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            
            <div className="milk_img">
                <img src="207.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="208.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="209.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="210.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="211.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="212.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="213.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="214.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="215.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="216.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="217.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>

            <div className="milk_img">
                <img src="218.avif" height="100rem" width="110rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="219.avif" height="100rem" width="110rem"/>
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

    <h1>Types of Rolling Paper Available</h1>
    <p>Rolling paper is an essential component for smokers whether it's for their cigarettes or joints. Whether you're a seasoned roller or a beginner, choosing the right rolling paper can enhance your smoking experience. We bring you a wide selection of premium rolling papers from top brands like Stash Pro, Bongchie, and Mozo, ensuring a clean, slow, and even burn every time.</p>

    <h2>Types of Rolling Paper</h2>
    <ul>
        <li><strong>Standard Rolling Papers</strong>
            <p>Perfect for everyday use, these rolling papers come in different thicknesses and materials, such as hemp, rice, and wood pulp. They offer a balanced burn and are suitable for both beginners and experienced users.</p>
        </li>
        <li><strong>King Size & Slim Rolling Papers</strong>
            <p>For those who enjoy longer sessions, King Size and Slim Rolling Papers provide extra space for a more substantial role. They are ideal for social smoking or when you want a smoother, slower burn.</p>
        </li>
        <li><strong>Pre-Rolled Cones</strong>
            <p>No rolling skills? No problem! Pre-rolled cones eliminate the need to roll manually—just fill, twist, and enjoy. These cones are perfect for beginners and those who prefer convenience.</p>
        </li>
        <li><strong>Unbleached & Organic Rolling Papers</strong>
            <p>If you prefer a more natural smoking experience, unbleached, organic, and hemp rolling papers are a great choice. They are free from chlorine and other harsh chemicals, providing a cleaner taste.</p>
        </li>
        <li><strong>Flavored & Specialty Rolling Papers</strong>
            <p>Enhance your smoke with flavored rolling papers that come in fruit, mint, chocolate, and other exotic flavors. Transparent cellulose rolling papers are another unique option, offering a stylish, slow-burning experience without affecting the taste.</p>
        </li>
    </ul>

    <h2>Top Brands for Rolling Papers</h2>
    <p>We stock high-quality rolling papers from trusted brands to ensure the best smoking experience:</p>
    <ul>
        <li><strong>Stash Pro</strong> - Premium rolling papers, cones, and accessories.</li>
        <li><strong>Bongchie</strong> - Known for ultra-thin papers and pre-rolled cones.</li>
        <li><strong>Mozo</strong> - Offers classic and flavoured rolling papers for a smooth burn.</li>
    </ul>

    <h2>Why Buy Rolling Paper Online from Us?</h2>
    <ul>
        <li><strong>8-Minute Delivery</strong> - Get your rolling papers delivered instantly in Gurugram and other major cities in India.</li>
        <li><strong>Wide Selection</strong> - Choose from an extensive range of rolling papers, cones, and filters.</li>
        <li><strong>Authentic Brands</strong> - We only stock trusted brands like Stash Pro, Bongchie, and Mozo for quality assurance.</li>
    </ul>





{/* 
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
            
            <p>This data was last updated on 19/7/2025</p> */}
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


export default Panpage;