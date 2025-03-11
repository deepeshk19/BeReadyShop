import React, { useState } from "react";
import Cart from "./Cart"; 
import "./Shop.css";
import Footer from "../Component/Footer";

const products = [
    
        {
            "id": "2",
            "name": "Classic Leather Jacket",
            "imgUrl": "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/2/222b2f5CD20220706129853JA-Black_1.jpg",
            "description": "A timeless black leather jacket made from genuine leather. Perfect for all seasons.",
            "price": 120,
            "review": [
              { "user": "John Doe", "rating": 4.5, "comment": "Great quality and stylish!" },
              { "user": "Sarah Smith", "rating": 5, "comment": "Absolutely love this jacket!" }
            ]
          },
          {
            "id": "3",
            "name": "Slim Fit Denim Jeans",
            "imgUrl": "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/1/31791d7NK_URFS0066_1.jpg",
            "description": "Premium stretchable denim jeans with a slim fit for a modern look.",
            "price": 60,
            "review": [
              { "user": "David Brown", "rating": 4, "comment": "Comfortable and fits well." }
            ]
          },
          {
            "id": "4",
            "name": "Casual Cotton T-Shirt",
            "imgUrl": "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/e/cef50e4UWAW23TSH008_1.jpg?rnd=20200526195200&tr=w-512",
            "description": "Soft and breathable cotton T-shirt available in multiple colors.",
            "price": 25,
            "review": [
              { "user": "Emily Johnson", "rating": 4.8, "comment": "Super comfy and lightweight!" }
            ]
          },
          {
            "id": "5",
            "name": "Sneakers - White Edition",
            "imgUrl": "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/8/6/86fdd44Force-White_1.jpg?rnd=20200526195200&tr=w-512",
            "description": "Trendy white sneakers with cushioned soles for all-day comfort.",
            "price": 75,
            "review": [
              { "user": "Mike Lee", "rating": 5, "comment": "Best sneakers I've ever owned!" }
            ]
          },
          {
            "id": "6",
            "name": "Elegant Handbag",
            "imgUrl": "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/9/a926ecf17514-INTL_1.jpg?rnd=20200526195200&tr=w-512",
            "description": "A stylish handbag made of premium leather, perfect for all occasions.",
            "price": 90,
            "review": [
              { "user": "Sophia Martinez", "rating": 4.7, "comment": "Looks elegant and classy!" }
            ]
          },
          {
            "id": "7",
            "name": "Vintage Sunglasses",
            "imgUrl": "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/3/93d5116NYFPPBL003943_1.jpg?rnd=20200526195200&tr=w-512",
            "description": "Classic vintage sunglasses with UV protection.",
            "price": 50,
            "review": [
              { "user": "Jake Wilson", "rating": 4.2, "comment": "Great design and protection." }
            ]
          },
          {
            "id": "8",
            "name": "Formal Blazer",
            "imgUrl": "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/0/8/08ba2f5LYBZCSSBP57894_1.jpg?rnd=20200526195200&tr=w-512",
            "description": "A sharp formal blazer for office and special occasions.",
            "price": 110,
            "review": [
              { "user": "Liam Turner", "rating": 4.9, "comment": "Excellent fit and material." }
            ]
          },
          {
            "id": "9",
            "name": "Leather Loafers",
            "imgUrl": "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/d/3dfd467201828FW2_1.jpg?rnd=20200526195200&tr=w-512",
            "description": "Premium leather loafers for a sophisticated look.",
            "price": 85,
            "review": [
              { "user": "Henry Adams", "rating": 5, "comment": "Very comfortable and stylish." }
            ]
          },
          {
            "id": "10",
            "name": "Casual Hoodie",
            "imgUrl": "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/2/222b2f5CD20220919180862HD-Green_1.jpg?rnd=20200526195200&tr=w-512",
            "description": "Warm and cozy hoodie for a relaxed casual look.",
            "price": 55,
            "review": [
              { "user": "Oliver Green", "rating": 4.6, "comment": "Soft fabric and good fit!" }
            ]
          },
            {
              "id": "11",
              "name": "Sports Watch",
              "imgUrl": "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/0/4096b2cr8871640004_1.jpg?rnd=20200526195200&tr=w-512",
              "description": "Water-resistant sports watch with multiple functions.",
              "price": 59.99,
              "review": [
                { "user": "Daniel White", "rating": 4.8, "comment": "Great for workouts and outdoor use!" }
              ]
            },
            {
              "id": "12",
              "name": "Floral Maxi Dress",
              "imgUrl": "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/e/c/ec79f04GRACEE_1.jpg?rnd=20200526195200&tr=w-512",
              "description": "A beautiful floral maxi dress perfect for summer.",
              "price": 79.99,
              "review": [
                { "user": "Sophia Green", "rating": 4.9, "comment": "Love the fabric and design!" }
              ]
            },
            {
              "id": "13",
              "name": "Woolen Scarf",
              "imgUrl": "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/3/c3889508905241300983_1.jpg?rnd=20200526195200&tr=w-512",
              "description": "Soft woolen scarf to keep you warm in winter.",
              "price": 29.99,
              "review": [
                { "user": "Emma Watson", "rating": 4.7, "comment": "Soft and cozy!" }
              ]
            },
            {
              "id": "14",
              "name": "High Heels",
              "imgUrl": "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/4/949225eCLF2499_1.jpg?rnd=20200526195200&tr=w-512",
              "description": "Elegant high heels to complete your evening outfit.",
              "price": 89.99,
              "review": [
                { "user": "Sophia Black", "rating": 4.5, "comment": "Very comfortable and stylish." }
              ]
            },
            {
              "id": "15",
              "name": "Classic White Shirt",
              "imgUrl": "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/2/4/24215e3MN-LPSFMCLP829013_1.jpg?rnd=20200526195200&tr=w-512",
              "description": "A must-have crisp white shirt for formal and casual wear.",
              "price": 49.99,
              "review": [
                { "user": "Johnathan Reed", "rating": 4.6, "comment": "Perfect fit and breathable fabric!" }
              ]
            },
            {
              "id": "16",
              "name": "Summer Sandals",
              "imgUrl": "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/f/b/fb9ddb8HUSPOL00208798_0.jpg?rnd=20200526195200&tr=w-512",
              "description": "Lightweight summer sandals for a breezy feel.",
              "price": 39.99,
              "review": [
                { "user": "Emily Rose", "rating": 4.8, "comment": "Great for daily wear!" }
              ]
            }
        
      
];

const Shop = () => {
    const [cart, setCart] = useState({}); // Cart state
    const [searchQuery, setSearchQuery] = useState(""); // Search state

    // Function to add product to cart
    const addToCart = (product) => {
        setCart((prevCart) => ({
            ...prevCart,
            [product.id]: prevCart[product.id]
                ? { ...prevCart[product.id], quantity: prevCart[product.id].quantity + 1 }
                : { ...product, quantity: 1 },
        }));
    };

    // Filter products based on search query
    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="shop-container">
                <h2 className="shop-title">Shop the Latest Trends</h2>
                
                {/* Search Bar */}
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="search-bar"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                
                <div className="product-grid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div className="product-card" key={product.id}>
                                <img style={{ height: "300px", width: "300px" }} src={product.imgUrl} alt={product.name} className="product-image" />
                                <h3 className="product-name">{product.name}</h3>
                                <h3 className="product-price">${product.price}</h3>
                                <p className="product-description">{product.description}</p>
                                <button className="buy-button" onClick={() => addToCart(product)}>Buy Now</button>
                            </div>
                        ))
                    ) : (
                        <p className="no-results">No products found.</p>
                    )}
                </div>
                
                {/* Cart Component */}
                <Cart cart={cart} setCart={setCart} />
            </div>
            <Footer />
        </>
    );
};

export default Shop;
