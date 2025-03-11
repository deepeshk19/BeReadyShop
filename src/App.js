import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Shop from "./Pages/Shop";
import Blog from "./Component/Blog";
import Navbar from "./Component/Navbar";
import NewTop from "./Component/NewTop";
import Slideshow from "./Component/Slideshow";
import Trendy from "./Component/Trendy";
import BrandsCollab from "./Component/BrandsCollab";
import Footer from "./Component/Footer";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout"; // ✅ Import Checkout Page
import Login from "./Login/Login";
import Register from "./Login/Register";
import Contact from "./Login/Contact";

const Home = () => (
  <>
    <Slideshow />
    <Trendy />
    <NewTop />
    <Blog />
    <BrandsCollab />
    <Footer />
  </>
);

const App = () => {
  const [cart, setCart] = useState([]); // ✅ Cart state is managed globally

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/login" element={<><Login /><Footer/></>} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
        <Route path="/blog" element={<><Blog/> <Footer/></>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>
    </>
  );
};

export default App;
