import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  
  useEffect(() => {
   
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  const clearBasket = () => {
    localStorage.removeItem('cart');
    setCart([]); 
    alert('A kosár kiürítve!');
  };

  return (
    <div>
      {/*================ Kezdőlap Menü Kezdete =================*/}
      <header>
        <nav className="navbar navbar-expand-md navbar-light fixed-top topnav">
          <a className="navbar-brand" href="home.html">Go-Bicikli</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link color-white" href="home.html">Kezdőlap</a>
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
                  <img style={{ height: '30px' }} src="assets/icons/shopping-cart-white.png" alt="cart" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/*================ Menü Vége =================*/}
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h3 id="cartItemsHeader">A kosarad</h3>
            <div id="cartItems">
              {cart.length === 0 ? (
                <p>A kosár üres.</p>
              ) : (
                <table className="table">
                  <thead>
                    <tr>
                      <th>Termék neve</th>
                      <th>Méret</th>
                      <th>Szín</th>
                      <th>Mennyiség</th>
                      <th>Ár</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.size}</td>
                        <td>{item.color}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
            <button className="btn btn-danger" onClick={clearBasket}>Tételek eltávolítása</button>
            <Link to="/delivery" className="btn btn-success">Tovább a szállításhoz</Link>
          </div>
        </div>
      </div>

      {/*================ Kezdődik a Lábléc Rész =================*/}
      <footer className="page-footer font-small">
        <div className="footer-copyright text-center py-3">© 2025 Copyright</div>
      </footer>
      {/*================ Lábléc Vége =================*/}
    </div>
  );
};

export default ShoppingCart;
