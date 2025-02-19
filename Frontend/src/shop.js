import React from 'react';
import ProductCard from './ProductCard';

const ShopPage = () => {
  const products = [
    {
      id: 1,
      name: "Marin Bolinas Ridge 1",
      price: 599,
      rating: 4,
      image: "assets/images/Marin Bolinas Ridge 1 Blue.jpg",
    },
    {
      id: 2,
      name: "Marin Bolinas Ridge 2",
      price: 699,
      rating: 4.5,
      image: "assets/images/Marin Bolinas Ridge 2 Black.jpg",
    },
    {
      id: 3,
      name: "Marin Gestalt",
      price: 1099,
      rating: 5,
      image: "assets/images/Marin Gestalt Blue.jpg",
    },
    {
      id: 4,
      name: "Polygon Strattos S5 - Shimano 105",
      price: 1299,
      rating: 5,
      image: "assets/images/Polygon Strattos S5 - Shimano 105.jpg",
    },
    {
      id: 5,
      name: "Marin Kentfield CS2 ST",
      price: 769,
      rating: 4.5,
      image: "assets/images/Marin Kentfield CS2 ST Grey.jpg",
    },
    {
      id: 6,
      name: "Polygon Sierra Deluxe Sport",
      price: 599,
      rating: 4,
      image: "assets/images/Polygon Sierra Deluxe Sport.jpg",
    },
    {
      id: 7,
      name: "Polygon Mt Bromo N7",
      price: 4399,
      rating: 5,
      image: "assets/images/Polygon Mt Bromo N7.jpg",
    },
    {
      id: 8,
      name: "Polygon Mt Bromo N8",
      price: 5999,
      rating: 5,
      image: "assets/images/Polygon Mt Bromo N8.jpg",
    },
  ];

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-light fixed-top topnav">
          <a className="navbar-brand" href="home.html">Go-Bicikli</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link color-white" href="home.html">Főoldal</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="category.html">Kategóriák</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="shop.html">Bolt</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Kapcsolat</a>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="shopping-cart.html">
                  <img style={{ height: '30px' }} src="assets/icons/shopping-cart-white.png" alt="Cart"/>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="container-fluid">
        <h2 className="pt-4 pl-3">Kerékpár galéria</h2>
        <div className="row justify-content-md-center w-90 mx-auto">
          {products.map((product) => (
            <div className="col-xs-10 col-sm-6 col-md-4 col-lg-3 col-xl-3 mb-4" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <footer className="page-footer font-small">
        <div className="footer-copyright text-center py-3">© 2025 Copyright</div>
      </footer>
    </div>
  );
};

export default ShopPage;
