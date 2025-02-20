import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import index from './index';
import home from './components/home';
import contact from './components/contact';
import category from './components/category';
import shop from './components/shop';
import shopping-cart from './components/shopping-cart';
import single-item from './components/single-item';
import contactForm from './components/contactForm';
import Delivery from './components/Delivery';
import Newsletter from './components/Newsletter';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ContactPage from './ContactPage';
import Newsletter from './components/Newsletter';
import Categories from './components/Categories';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="./home" component={HomePage} />
        <Route path="./index" component={IndexPage} />
        <Route path="./contact" component={ContactPage} />
        <Route path="./category" component={CategoryPage} />
        <Route path="./shop" component={ShopPage} />
        <Route path="./shopping-cart" component={ShoppingCartPage} />
        <Route path="./single-item" component={Single-ItemPage} />
        <Route path="./contactForm" component={ContactFormPage}/>
        <Route path="./Delivery" component={DeliveryPage}/>
        <Route path="./Newsletter" component={NewsletterPage}/>
        <Route path="./Categories" component={CategoriesPage}/>
        <Route path="./Footer" component={FooterPage}/>
        <Route path="./Header" component={HeaderPage}/>
        <Route path="./HeroSection" component={HeroSectionPage}/>
      </Switch>
    </Router>
  );
}

export default App;
