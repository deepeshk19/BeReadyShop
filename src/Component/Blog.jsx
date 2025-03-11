import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "MIX & MATCH WEEKEND",
    description: "BeReady brings you the latest fashion trends to mix and match effortlessly. Elevate your style with versatile outfits, perfect for any occasion. Stay trendy, stay confident...",
    image: "https://ielfs.com/wp-content/uploads/2023/06/5.jpg", // Replace with actual image
  },
  {
    id: 2,
    title: "FOR YOUR INSPIRATION",
    description: "BeReady inspires your style with fresh fashion ideas and timeless elegance. Discover outfits that blend comfort and sophistication effortlessly. Elevate your wardrobe with confidence and creativity...",
    image: "http://i0.wp.com/www.relmstyle.com/wp-content/uploads/2021/02/How-to-Find-Style-Inspiration-For-Your-Outfits-Pinterest.jpg", // Replace with actual image
  },
  {
    id: 3,
    title: "LONDON FASHION WEEK 2025",
    description: "BeReady brings the latest trends from London Fashion Week 2025. Experience runway-inspired styles, bold designs, and timeless elegance to elevate your fashion game effortlessly...",
    image: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2200955497.jpg?q=w_1110,c_fill/f_webp", // Replace with actual image
  },
];

const Blog = () => {
  return (
    <div className="blog-section">
      <h2 className="blog-title">BLOG UPDATES</h2>
      <p className="blog-subtitle">Our stories</p>
      <div className="blog-container">
        {blogPosts.map((post) => (
          <div className="blog-card" key={post.id}>
            <img style={{height:'350px'}} src={post.image} alt={post.title} className="blog-image" />
            <h3 className="blog-heading">{post.title}</h3>
            <p className="blog-description">{post.description}</p>
            <Link to="/" className="blog-readmore">READ MORE</Link> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
