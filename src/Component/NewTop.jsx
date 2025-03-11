import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faHeart } from "@fortawesome/free-regular-svg-icons"; 
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"; 
import "./NewTop.css";


const NewTop = () => {
  const categories = [
    {
      title: "NEW-IN",
      products: [
        {
          image: "Top1.jpg",
          name: "PARKA WITH FAUX FUR HOOD",
          price: "189.99 USD",
        },
        {
          image: "clothes6.webp",
          name: "BOMBER JACKET",
          price: "189.99 USD",
        },
      ],
    },
    {
      title: "FEATURED",
      products: [
        {
          image: "top.webp",
          name: "HANDMADE FLARED JACKET",
          price: "189.99 USD",
        },
        {
          image: "clothes7.webp",
          name: "SHORT KNIT COAT WITH BELT",
          price: "189.99 USD",
        },
      ],
    },
    {
      title: "TOP RATED",
      products: [
        {
          image: "clothes8.webp",
          name: "OVERSIZE BOMBER JACKET",
          price: "189.99 USD",
        },
        {
          image: "clothes9.webp",
          name: "HANDMADE FLARED JACKET",
          price: "189.99 USD",
        },
      ],
    },
  ];

  return (
    <div className="new-top-container">
      {categories.map((category, index) => (
        <div key={index} className="category">
          <h3>{category.title}</h3>
          <div className="products">
            {category.products.map((product, idx) => (
              <div key={idx} className="product-card">
                <img src={product.image} alt={product.name} />
                <p className="product-name">{product.name}</p>
                <p className="product-price">{product.price}</p>
                <div style={{marginBottom:'25px'}} className="product-icons">
                  <span data-tooltip="Add to Cart"><FontAwesomeIcon icon={ faCartShopping } /></span>
                  <span data-tooltip="Add to Wishlist"><FontAwesomeIcon icon={faHeart} /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewTop;
