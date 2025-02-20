import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/home";
import Contact from "./components/contact";
import Category from "./components/category";
import Shop from "./components/shop";
import ShoppingCart from "./components/shopping-cart";
import SingleItem from "./components/single-item";
import ContactForm from "./components/contactForm";
import Delivery from "./components/Delivery";
import Newsletter from "./components/Newsletter";
import Categories from "./components/Categories";
import City from "./components/city";
import Electric from "./components/electric";
import Mountain from "./components/mountain";
import Road from "./components/road";
import Gravel from "./components/gravel";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />  {/* A Header globálisan itt lesz megjelenítve */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category" element={<Category />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/single-item" element={<SingleItem />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/city" element={<City />} />
        <Route path="/electric" element={<Electric />} />
        <Route path="/mountain" element={<Mountain />} />
        <Route path="/road" element={<Road />} />
        <Route path="/gravel" element={<Gravel />} />
      </Routes>
      <Footer />  {/* A Footer globálisan itt lesz megjelenítve */}
    </Router>
  );
}

export default App;
