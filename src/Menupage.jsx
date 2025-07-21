import "./Menupage.css";

import React from 'react';
import './Style.css';

import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLines, faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faThreads } from '@fortawesome/free-brands-svg-icons';


const Menupage = () => {
    
    return (
    <div>
       
        
        <header className="header">
        <h1 className="BasketBuddy">BasketBuddy</h1>

        <div ><Link to="/changeAddress" Style="color:black">
        <h2 >Delivery in 15 min</h2>
            <h6>42G9+7Q4, Devri Rd,Taal..</h6>
        </Link>
        </div>


        <nav className="nav">
         <Link to="/titlepage">Home</Link>
                   <Link to="/freshpage">Fresh</Link>
                   <Link to="/menupage">Products</Link>
                   <Link to="/categorypage">Categories</Link>
          <a href="#Review">Review</a>
          <a href="#Blogs">Blogs</a>
        </nav>

        <div className="icons">
          <Link><FontAwesomeIcon icon={faGripLines} className="i"  /></Link> 
          <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} id="Shopping_icon" className="i" /></Link>
          <Link><FontAwesomeIcon icon={faCircleUser } id="Login_icon" className="i"  /></Link>
        </div>


</header>
       

               
    <div class="menulist">
       <Link to="/panpage"> <div class="category">
            <img src="01.avif" alt="Paan Corner" />
            
        </div></Link>
       <Link to="/dairypage"><div class="category">
            <img src="02.avif" alt="Dairy, Bread & Eggs" />
            
        </div></Link>
       <Link to="/fruitspage"> <div class="category">
            <img src="03.avif" alt="Fruits & Vegetables" />
            
        </div></Link>
       <Link to="/coldrinkpage"> <div class="category">
            <img src="04.avif" alt="Cold Drinks & Juices" />
            
        </div></Link>
       <Link to="/snacks">  <div class="category">
            <img src="013.avif" alt="Snacks & Munchies" />
            
        </div></Link>
        <div class="category">
            <img src="06.avif" alt="Breakfast & Instant Food" />
        </div>
       <Link to="/desertpage"><div class="category">
            <img src="07.avif" alt="Sweet Tooth" />
        </div></Link> 
        <div class="category">
            <img src="08.avif" alt="Bakery & Biscuits" />
        </div>
        <Link to="/petpage"><div class="category">
            <img src="09.avif" alt="Tea, Coffee & Health Drink" />
        </div></Link> 
       <Link to="/attapage"> <div class="category">
            <img src="05.avif" alt="Atta, Rice & Dal" />
        </div></Link>
        <div class="category">
            <img src="011.avif" alt="Masala, Oil & More" />
        </div>
        <div class="category">
            <img src="012.avif" alt="Sauces & Spreads" />
        </div>
       <Link to="/babypage"><div class="category">
            <img src="014.avif" alt="Chicken, Meat & Fish" />
        </div></Link> 
        <div class="category">
            <img src="015.avif" alt="Organic & Healthy Living" />
        </div>
        <div class="category">
            <img src="baby.avif" alt="Baby Care" />
        </div>
       <Link to="/dairypage"> <div class="category">
            <img src="02.avif" alt="Pharma & Wellness" />
        </div></Link>
        <div class="category">
            <img src="018.avif" alt="Cleaning Essentials" />
        </div>
        <div class="category">
            <img src="019.avif" alt="Home & Office" />
        </div>
        <div class="category">
            <img src="path/to/personal-care.jpg" alt="Personal Care" />
        </div>
        <div class="category">
            <img src="path/to/pet-care.jpg" alt="Pet Care" />
        </div>
    </div>


 <div className="condition">
      <h1 >Fresh Vegetables</h1>
      <p >
        Fresh vegetables are an essential component of a healthy and wholesome diet,
        providing a variety of vital nutrients essential for overall health and well-being.
        Following are various types of fresh vegetables and their nutritional values with
        their versatile uses and the numerous benefits they provide to those who
        incorporate them into their daily meals.
      </p>

     <h1>Buy grocery items at Online Grocery Store in India</h1>
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


export default Menupage;