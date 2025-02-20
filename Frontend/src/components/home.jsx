import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  useEffect(() => {
    
    displayDateAndTime();
    changeLoginText();
  }, []);

  const displayDateAndTime = () => {
    const dateTimeElement = document.getElementById('dateAndTime');
    const currentDate = new Date();
    dateTimeElement.textContent = currentDate.toLocaleString();
  };

  const changeLoginText = () => {
    
  };

  return (
    <div>
      {/* Header (Menu) */}
      <header>
        <nav className="navbar navbar-expand-md navbar-light fixed-top topnav">
          <Link className="navbar-brand" to="/home">Go-Bicikli</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link color-white" to="/home">Kezdőlap</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/category">Kategóriák</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Bolt</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Kapcsolat</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/insert-new-item">Új termék</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/shopping-cart">
                  <img style={{ height: '30px' }} src="../Frontend/assets/icons/shopping-cart-white.png" alt="Shopping Cart" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Home Page Banner */}
      <div id="indexWraper">
        <div>
          <div className="container-fluid home-photo">
            <div className="home-shop-now-btn">
              <div className="vertical-center">
                <h2 style={{ color: 'black' }}>Üdvözöljük a Go-Bicikli Webáruházban</h2>
                <Link className="btn btn-secondary" to="/shop">Vásárolj Most</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="text-center pt-1">
        <h2><small>Csak prémium minőségű bicikliket árulunk</small></h2>
        <p>Kezd a keresést a kategóriákban:</p>
      </div>

      {/* Categories Section */}
      <div className="container-fluid">
        <div className="row justify-content-md-center" style={{ width: '95%', margin: 'auto' }}>
          <CategoryCard link="/categories/mountain" title="Hegyi" image="frontend/assets/images/Marin Bolinas Ridge 1 Photo.jpg" />
          <CategoryCard link="/categories/gravel" title="Terep" image="assets/images/Marin Gestalt Photo.jpg" />
          <CategoryCard link="/categories/road" title="Út" image="assets/images/Polygon Strattos S5 - Shimano 105 Photo.jpg" />
          <CategoryCard link="/categories/city" title="Városi" image="assets/images/Marin Kentfield CS2 ST Photo.jpg" />
          <CategoryCard link="/categories/electric" title="Elektromos" image="assets/images/Polygon Mt Bromo N7 Photo.jpg" />
        </div>
      </div>

      {/* Message Section */}
      <div className="text-center pt-1">
        <h2><small>Minden megvásárolt biciklinkre 5 év garancia jár!</small></h2>
        <Link className="btn btn-secondary" to="/shop">Vásárolj Most</Link>
      </div>

      {/* Newsletter Section */}
      <hr />
      <div className="justify-content-md-center pt-1">
        <form>
          <div className="container justify-content-md-center">
            <div className="row mb-3 text-center">
              <h4 className="col-12">Csatlakozz hírlevelünkhöz a legfrissebb hírekért és ajánlatokért</h4>
              <div className="col-4 pr-1">
                <input type="text" className="form-control" placeholder="Név" name="name" required />
              </div>
              <div className="col-4 pr-1">
                <input type="text" className="form-control" placeholder="Email cím" name="mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required />
              </div>
              <div className="col-4 pr-1">
                <button type="submit" className="btn btn-primary btn-block" onClick={() => alert('Feliratkozás')}>Feliratkozás</button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="page-footer font-small">
        <span id="dateAndTime"></span>
        <div className="footer-copyright text-center py-3">© 2025 Szerzői jogok</div>
      </footer>
    </div>
  );
};

// Category Card Component
const CategoryCard = ({ link, title, image }) => {
  return (
    <div className="col-xs-10 col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
      <Link className="cat-home" to={link}>
        <div className="card mx-auto text-center">
          <img src={image} alt={title} className="card-img-top" />
          <div className="card-body pb-0">
            <h4 className="card-title">{title}</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
