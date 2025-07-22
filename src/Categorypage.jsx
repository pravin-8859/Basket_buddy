
import React from 'react';
import {Link} from "react-router-dom";
import './Categorypage.css';

const Categorypage = () => {
  const categories = {
    "Chicken, Meat & Fish": [
      "Exotic Meat",
      "Chicken",
      "Sausage, Salami & Ham",
      "Fish & Seafood",
      "Mutton"
    ],
    "Pet Care": [
      "Dog Food & Treats",
      "Pet Grooming & Accessories",
      "Accessories & Other Supplies",
      "Other Pet Supplies",
      "Pet Litter",
      "Cat Food & Treats",
      "Cat Treats",
      "Dog Treat",
      "Pet Health & Supplements",
      "Pet Toys"
    ],
    "Baby Care": [
      "Baby Diapers",
      "Baby Wipes",
      "Baby's Health & Safety Tools",
      "Baby Gift Hampers",
      "Baby Feeding Needs",
      "Hygiene",
      "Oral & Nasal Care",
      "Diapers & Wipes"
    ],
    
  };

  return (
    <div className="categories">
      <h2>Categories</h2>
      {Object.keys(categories).map((category) => (
        <div key={category} className="category">
          <h3>{category}</h3>
          <ul>
            {categories[category].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Categorypage;