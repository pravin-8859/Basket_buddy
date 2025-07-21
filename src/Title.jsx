import React from 'react';
import './Style.css';

import {Link} from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faThreads } from '@fortawesome/free-brands-svg-icons';



const Title = () => {
    


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
          <a href="#Categories">Categories</a>
          <a href="#Review">Review</a>
          <a href="#Blogs">Blogs</a>
         
        </nav>

        <div className="icons">
          <Link><FontAwesomeIcon icon={faMagnifyingGlass} className="i" /></Link> 
          <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} id="Shopping_icon" className="i" /></Link>
          <Link><FontAwesomeIcon icon={faCircleUser } id="Login_icon" className="i"  /></Link>
        {/* <div> <input type="text" class="search-input" placeholder='Search "curd"' aria-label="Search"></input></div> */}

        </div>



       



          {/* <div className="shopping_cart">
            <div className="box">
                <img src="orange1.webp" height="150px" width="120px" />
                <div>
                    <h6>Orange</h6>
                    <span>prc-20</span>
                    <span>Qty.-1</span>
                </div>
            </div>
            <div className="box">
                <img src="orange1.webp" height="150px" width="120px" />
                <div>
                    <h6>Orange</h6>
                    <span>prc-20</span>
                    <span>Qty.-1</span>
                </div>
            </div>
            <div className="box">
                <img src="orange1.webp" height="150px" width="120px"/>
                <div>
                    <h6>Orange</h6>
                    <span>prc-20</span>
                    <span>Qty.-1</span>
                </div>
            </div> 

            <div className="total" >
                <h4>total</h4>
            </div>
            <div className="checkout">CheckOut</div>
        </div> */}


        {/* <form className="login">
          <h3>Login Now</h3>
          <input type="text" placeholder="enter username" />
          <input type="password" placeholder="enter password" />
          <button type="submit">Submit</button>
          <h4>Forget password</h4>
          <button type="button">SignUp</button>
        </form> */}
      </header>
          
        <main>
        <div className="main">
          <h1>Shop for Groceries</h1>
          <h2 className="online_here">Online Here</h2>
          <span><img src="groc.jpg" height="400px" alt="Groceries" /></span> 
          <button className="button1">Shop Now</button>
          <button className="button2">Tour App</button>
        </div>


              <div class="offer-container" role="region" aria-label="Pharmacy products offer banner">
    <div class="offer-text">
      <div class="headline">Pharmacy at your doorstep!</div>
      <div class="subtext">Cough syrups, pain relief sprays & more</div>
      <Link to="/pharmacypage">  <button class="btn-order" aria-label="Order pharmacy products now">Order Now</button></Link>
    </div>
    <div class="offer-images" aria-hidden="true">
      <img src="moov.png" alt="Purple Moov pain relief spray bottle" height="230rem" width="100rem"/>
    </div>
  </div>




    <div class="pet-container" role="region" aria-label="Pharmacy products offer banner">
    <div class="offer-text">
      <div class="headline">Pet Care Supplies In Minute</div>
      <div class="subtext">Food , Treats & more</div>
     <Link to="/pharmacypage" ><button class="btn-order" aria-label="Order pharmacy products now">Order Now</button></Link>
    </div>
    <div class="offer-images" aria-hidden="true">
      <img src="moov.png" alt="Purple Moov pain relief spray bottle" height="230rem" width="100rem"/>
    </div>
  </div>


  
    <div class="food-container" role="region" aria-label="Pharmacy products offer banner">
    <div class="offer-text">
      <div class="headline">Food & Desert</div>
      <div class="subtext">Food & more</div>
   <Link to="/desertpage"> <button class="btn-order" aria-label="Order pharmacy products now">Order Now</button></Link>
    </div>
    <div class="offer-images" aria-hidden="true">
      <img src="moov.png" alt="Purple Moov pain relief spray bottle" height="230rem" width="100rem"/>
    </div>
  </div>



        <div className="menu_img"> 
         <Link to="/menupage">  <div className="seeAll"><h2>See All</h2></div></Link> 
           
            <div className="image">
                <img src="namkeen1.avif" height="200rem" width="200rem"/>
                <h3>Namkeen</h3>
            </div>
            <div className="image">
                <img src="fruits and vegetable.avif" height="200rem" width="200rem"/>
                <h3>fruits and vegetable</h3>
            </div>
            <div className="image">
                <img src="Namkeen.avif" height="200rem" width="200rem"/>
                <h3>Wafers</h3>
            </div>
            <div className="image">
                <img src="fantasy.avif" height="200rem" width="200rem"/>
                <h3>Dark Fantasy</h3>
            </div>
            <div className="image">
                <img src="frooti.avif" height="200rem" width="200rem"/>
                <h3>Coldrinks</h3>
            </div>
            <div className="image">
                <img src="pet food.avif" height="200rem" width="200rem"/>
                <h3>Pet Food</h3>
            </div>
            <div className="image">
                <img src="dairy.avif" height="200rem" width="200rem"/>
                <h3>dairy, eggs</h3>
            </div>
            <div className="image">
                <img src="maggie.avif" height="200rem" width="200rem"/>
                <h3>Maggie</h3>
            </div>
            <div className="image">
                <img src="orange1.webp" height="200rem" width="200rem"/>
                <h3>Fruits</h3>
            </div>
            <div className="image">
                <img src="kurkure.avif" height="200rem" width="200rem"/>
                <h3>Kurkure</h3>
            </div>
        </div>


         <div><h2>dairy, Bread & Eggs</h2></div>
         <Link to="/dairypage" className="seeAll">See All</Link>
        <div className="dairy">
           
            <div className="milk_img">
                <img src="milk.avif" height="230rem" width="230rem"/>
                <h3>Amul Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="mast milk.avif" height="230rem" width="230rem"/>
                <h3>Mast Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>500&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="egg.avif" height="230rem" width="230rem"/>
                <h3>Eggs</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>30&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
             <div className="milk_img">
                <img src="bread.avif" height="230rem" width="230rem"/>
                <h3>Bread</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>25&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="butter.avif" height="230rem" width="230rem"/>
                <h3>Butter</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>55&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="curd.avif" height="230rem" width="230rem"/>
                <h3>Gold amul</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>20&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="milk.avif" height="230rem" width="230rem"/>
                <h3>Milk</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>30&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="butter.avif" height="230rem" width="230rem"/>
                <h3>Butter</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>200&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="milk_img">
                <img src="cheese.avif" height="230rem" width="230rem"/>
                <h3>Cheese</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>70&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
        </div>

   

         <div><h2>Snacks & Munchies</h2></div>
           <Link to="/snacks" className="seeAll">See All</Link>
         <div className="snacks">
             <div className="snacks_img"> 
                <img src="namkeen1.avif" height="230rem" width="230rem"/>
                <h3>Namkeen</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>50&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                </div>
         
        <div className="snacks_img">
                <img src="namekeen2.avif" height="230rem" width="230rem"/> 
                <h3>Amul Milk</h3>
                 <div className="weight"><h6>750g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>70&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
           <div className="snacks_img">
                <img src="namkeen3.avif" height="230rem" width="230rem"/>
                <h3>Onion rings</h3>
                 <div className="weight"><h6>50g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>80&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="snacks_img">
                <img src="Namkeen.avif" height="230rem" width="230rem"/>
                <h3>allo bhujia</h3>
                 <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>60&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="snacks_img">
                <img src="onion ring puffs.avif" height="230rem" width="230rem"/>
                <h3>Onion namkeen</h3>
                 <div className="weight"><h6>230g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>50&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="snacks_img">
                <img src="fantasy.avif" height="230rem" width="230rem"/>
                <h3>Dark fantasy</h3>
                 <div className="weight"><h6>2kg</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>60&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="snacks_img">
                <img src="nuts.avif" height="230rem" width="230rem"/>
                <h3>Nuts</h3>
                 <div className="weight"><h6>5kg</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>55&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="snacks_img">
                <img src="onion ring puff.avif" height="230rem" width="230rem"/>
                <h3>Puffs</h3>
                 <div className="weight"><h6>1kg</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="snacks_img">
                <img src="wafers.avif" height="230rem" width="230rem"/>
                <h3>Wafers</h3>
                 <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>30&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            </div>
          
           <div><h2>colddrink and soft drinks</h2></div>
            <Link to="/coldrinkpage" className="seeAll">See All</Link>
        <div className="drinks">
            <div className="drinks_img">
                <img src="soft drinl.avif" height="230rem" width="230rem"/>
                <h3>Coke</h3>
                <div className="weight"><h6>2l</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>60&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div class="drinks_img">
                <img src="thumbs up.avif" height="230rem" width="230rem"/>
                <h3>Thumbs Up</h3>
                 <div className="weight"><h6>1l</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>50&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="drinks_img">
                <img src="coca cola.avif" height="230rem" width="230rem"/>
                <h3>Coca cola</h3>
                 <div className="weight"><h6>5l</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>70&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
          
           <div className="drinks_img">
                <img src="fanta.avif" height="230rem" width="230rem"/>
                <h3>Fanta</h3>
                 <div className="weight"><h6>2l</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>20&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="drinks_img">
                <img src="sprite.avif" height="230rem" width="230rem"/>
                <h3>Sprite</h3>
                 <div className="weight"><h6>5l</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>90&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="drinks_img">
                <img src="bisleri water.avif" height="230rem" width="230rem"/>
                <h3>Bisleri</h3>
                 <div className="weight"><h6>1l</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>100&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="drinks_img">
                <img src="badam milk.avif" height="230rem" width="230rem"/>
                <h3>Badaam shake</h3>
                 <div className="weight"><h6>500g=l</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>80&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="drinks_img">
                <img src="frooti.avif" height="230rem" width="230rem"/>
                <h3>Frooti</h3>
                 <div className="weight"><h6>500l</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>60&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="drinks_img">
                <img src="appy.avif" height="230rem" width="230rem"/>
                <h3>Appy</h3>
                 <div className="weight"><h6>500l</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>50&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
          </div>

          <div><h2>Fruits</h2></div>
          <Link to="/fruitspage" className="seeAll">See All</Link>
         <div className="fruits">
             <div className="snacks_img"> 
                <img src="apple.avif" height="230rem" width="230rem"/>
                <h3>Apple</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>50&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                </div>
             <div className="snacks_img">
                <img src="banana.avif" height="230rem" width="230rem"/> 
                <h3>Banana</h3>
                 <div className="weight"><h6>750g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>70&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
           <div className="snacks_img">
                <img src="blueberry.avif" height="230rem" width="230rem"/>
                <h3>Blueberry</h3>
                 <div className="weight"><h6>50g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>80&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="snacks_img">
                <img src="orange.avif" height="230rem" width="230rem"/>
                <h3>Orange</h3>
                 <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>60&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="snacks_img">
                <img src="papaya.avif" height="230rem" width="230rem"/>
                <h3>Papaya</h3>
                 <div className="weight"><h6>230g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>50&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="snacks_img">
                <img src="watermelon.avif" height="230rem" width="230rem"/>
                <h3>Watermelon</h3>
                 <div className="weight"><h6>2kg</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>60&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="snacks_img">
                <img src="coconut.avif" height="230rem" width="230rem"/>
                <h3>Coconut</h3>
                 <div className="weight"><h6>5kg</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>55&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="snacks_img">
                <img src="pineapple.avif" height="230rem" width="230rem"/>
                <h3>Pineapple</h3>
                 <div className="weight"><h6>1kg</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>40&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div> 
            <div className="snacks_img">
                <img src="rawmango.avif" height="230rem" width="230rem"/>
                <h3>RawMango</h3>
                 <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>30&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            </div>
          
          
          <div><h2>Pet Food</h2></div>
          <Link to="/petpage" className="seeAll">See All</Link>
         <div className="fruits">
             <div className="snacks_img"> 
                <img src="dogfood.avif" height="230rem" width="230rem"/>
                <h3>pedigree</h3>
                <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>500&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
                </div>
             <div className="snacks_img">
                <img src="pedigree.avif" height="230rem" width="230rem"/> 
                <h3>Pedigree Chunks</h3>
                 <div className="weight"><h6>750g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>700&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
           <div className="snacks_img">
                <img src="wetfood.avif" height="230rem" width="230rem"/>
                <h3>Wet Food</h3>
                 <div className="weight"><h6>50g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>800&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="snacks_img">
                <img src="dryfood.avif" height="230rem" width="230rem"/>
                <h3>Dry Food</h3>
                 <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>650&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="snacks_img">
                <img src="proadult.avif" height="230rem" width="230rem"/>
                <h3>Pro adult</h3>
                 <div className="weight"><h6>230g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>450&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="snacks_img">
                <img src="drools.avif" height="230rem" width="230rem"/>
                <h3>Drools</h3>
                 <div className="weight"><h6>2kg</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>630&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="snacks_img">
                <img src="purepet.avif" height="230rem" width="230rem"/>
                <h3>Purpet</h3>
                 <div className="weight"><h6>5kg</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>300&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="snacks_img">
                <img src="cat.avif" height="230rem" width="230rem"/>
                <h3>Cat Food</h3>
                 <div className="weight"><h6>1kg</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>350&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
            </div>
            <div className="snacks_img">
                <img src="barkout.avif" height="230rem" width="230rem"/>
                <h3>Bark Out</h3>
                 <div className="weight"><h6>500g</h6></div>
                <div className="rate"><h5><i className="fa-solid fa-indian-rupee-sign"></i>900&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button>ADD</button></h5></div>
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
</main>
        
    </div>
    );
}


export default Title;

