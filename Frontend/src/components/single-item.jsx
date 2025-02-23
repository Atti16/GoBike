import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const ProductPage = () => {
  
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 700,
    rate: 4,
    photos: [],
  });
  
  const [size, setSize] = useState('S');
  const [color, setColor] = useState('Blue');
  const [quantity, setQuantity] = useState(1);

  
  useEffect(() => {
    
    setProduct({
      name: 'Marin Bolinas Ridge 2',
      description: 'A great mountain bike with excellent features.',
      price: 700,
      rate: 4,
      photos: ['assets/images/Marin Bolinas Ridge 2 Black.jpg'], 
    });
  }, []);

  const handleAddToCart = () => {
    const item = {
      name: product.name,
      price: product.price,
      size,
      color,
      quantity,
    };

   
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);

    
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Termék hozzáadva a kosárhoz!');
  };

  return (
    <div>
      {/* Header */}
      <header>
        <nav className="navbar navbar-expand-md navbar-light fixed-top topnav">
          <a className="navbar-brand" href="home.html">Go-Bicikli</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link" href="home.html">Kezdőlap</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="category.html">Kategóriák</a>
              </li>
              <li className="nav-item">
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

      {/* Product Details */}
      <div className="container pt-4">
        <div className="row">
          <div className="col-12 col-md-6 mb-3">
            <div id="dynamicItemPhotos">
              <img src={product.photos[0]} alt={product.name} className="img-fluid" />
            </div>
          </div>

          <div className="col-12 col-md-6">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Méret:
              <select value={size} onChange={(e) => setSize(e.target.value)} id="itemSize">
                <option value="XS">XS (142-158 cm) - 27,5" Kerék</option>
                <option value="S">S (155-165 cm) - 27,5" Kerék</option>
                <option value="M">M (163-170 cm) - 27,5" Kerék</option>
                <option value="M">M (165-173 cm) - 29" Kerék</option>
                <option value="L">L (173-185 cm) - 29" Kerék</option>
                <option value="XL">XL (185-193 cm) - 29" Kerék</option>
              </select>
            </p>
            <p>Szín:
              <select value={color} onChange={(e) => setColor(e.target.value)} id="itemColor">
                <option value="Blue">Kék</option>
                <option value="Grey">Szürke</option>
                <option value="Yellow">Sárga</option>
                <option value="Black">Fekete</option>
                <option value="Green">Zöld</option>
                <option value="White">Fehér</option>
              </select>
            </p>
            <p>Mennyiség: 
              <input 
                type="number" 
                id="qty" 
                value={quantity} 
                onChange={(e) => setQuantity(e.target.value)} 
                min="1" 
                max="5" 
              />
            </p>
            <p>Értékelés: {product.rate} <img style={{ height: '18px' }} src="assets/icons/star.png" alt="rating" /></p>
            <p>Ár: <span style={{ color: 'red' }}>{product.price}$</span></p>
            <button className="btn btn-primary" onClick={handleAddToCart}>Kosárba</button>
          </div>
        </div>

        {/* Recommended Products */}
        <div>
          <h3>Ajánlott termékek</h3>
          <hr />
          <div className="row w-90 mx-auto">
            {/* Repeat for each recommended product */}
            <div className="col-xs-10 col-sm-6 col-md-4 col-lg-3 mb-4">
              <div className="card mx-auto text-center">
                <img src="assets/images/Marin Bolinas Ridge 2 Black.jpg" alt="Hegyi" className="card-img-top" />
                <div className="card-body pb-0">
                  <h5>Marin Bolinas Ridge 2</h5>
                  <h5><img style={{ height: '18px' }} src="assets/icons/star.png" alt="rating" /> 4.5</h5>
                  <Link className="btn btn-secondary btn-block" to="/single-item/2">Részletek</Link>
                </div>
              </div>
            </div>
            {/* Additional recommended products here */}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <hr />
      <div className="justify-content-md-center pt-1">
        <form>
          <div className="container justify-content-md-center">
            <div className="row mb-3 text-center">
              <h4 className="col-12">Iratkozzon fel hírlevelünkre a legújabb hírekért és ajánlatokért</h4>
              <div className="col-4 pr-1">
                <input type="text" className="form-control" placeholder="Név" name="name" required />
              </div>
              <div className="col-4 pr-1">
                <input type="email" className="form-control" placeholder="Email cím" name="mail" required />
              </div>
              <div className="col-4 pr-1">
                <button type="submit" className="btn btn-primary btn-block">Feliratkozás</button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="page-footer font-small">
        <div className="footer-copyright text-center py-3">© 2025 Szerzői jog</div>
      </footer>
    </div>
  );
};

export default ProductPage;
