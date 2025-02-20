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
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";


function App() {
  return (
    <Router>
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
        <Route path="/footer" element={<Footer />} />
        <Route path="/header" element={<Header />} />
        <Route path="/hero-section" element={<HeroSection />} />
      </Routes>
    </Router>
  );
}

export default App;
