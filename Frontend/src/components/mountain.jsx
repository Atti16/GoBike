import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const MountainBikesPage = () => {
  useEffect(() => {
    changeLoginText();
  }, []);

  const changeLoginText = () => {
    
  };

  const setIdOfItemToShow = (id) => {
   
  };

  return (
    <div>
      {/* ================= Kezdőlap menü szakasz kezdete ================= */}
      <header>
        <nav className="navbar navbar-expand-md navbar-light fixed-top topnav">
          <Link className="navbar-brand" to="/home">Go-Bicikli</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link color-white" to="/home">Főoldal</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/category">Kategóriák</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">Bolt</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Kapcsolat</Link>
              </li>
            </ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/shopping-cart">
                  <img style={{ height: '30px' }} src="../assets/icons/shopping-cart-white.png" alt="Shopping Cart" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* ================= Kezdőlap menü szakasz vége ================= */}

      {/* ================= Kategóriák szakasz kezdete ================= */}
      <div className="container-fluid container-height">
        <div className="row">
          <div className="col-12 col-sm-3 col-md-3 col-lg-3 pt-2 p-0">
            <ul className="vertical-nav navbar-nav">
              <h2 className="vertical-nav-element" style={{ backgroundColor: '#D8D2CB' }}><small>Kategóriák:</small></h2>
              <li><Link to="/mountain">Mountain</Link></li>
              <li><Link to="/gravel">Gravel</Link></li>
              <li><Link to="/road">Út</Link></li>
              <li><Link to="/city">Városi</Link></li>
              <li><Link to="/electric">Elektromos</Link></li>
            </ul>
          </div>
          <div className="col-12 col-sm-9 col-md-9 col-lg-9 pt-2 pt-4">
            <div>
              <h3>Mountain biciklik</h3>
              <hr />
              <p>A mountain biciklik tökéletesek azoknak a bringázóknak, akik kényelmes közlekedést szeretnének, családdal együtt tekernek, vagy el akarnak térni a kitaposott ösvényről. <br />Emellett azoknak is ideálisak, akik olyan túrákat keresnek, amelyek tartalmaznak mindent egy kicsit. Hosszú, hullámzó terep, technikai terep és izgalmas lejtők.</p>
              <div className="container">
                <div className="row">
                  <div className="col-12 col-lg-4 col-md-5 col-sm-12 col-xl-3 mb-2">
                    <div className="galery-card">
                      <img src="images/Marin Bolinas Ridge 1 Blue.jpg" alt="Mountain" className="galery-card-photo" />
                      <h5>Marin Bolinas Ridge 1</h5>
                      <Link className="btn btn-secondary btn-block" to="/single-item" onClick={() => setIdOfItemToShow(1)}>További információ</Link>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 col-md-5 col-sm-12 col-xl-3">
                    <div className="galery-card">
                      <img src="images/Marin Bolinas Ridge 2 Black.jpg" alt="Mountain" className="galery-card-photo" />
                      <h5>Marin Bolinas Ridge 2</h5>
                      <Link className="btn btn-secondary btn-block" to="/single-item" onClick={() => setIdOfItemToShow(2)}>További információ</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================= Kategóriák szakasz vége ================= */}

      {/* ================= Lábjegyzet szakasz kezdete ================= */}
      <footer className="page-footer font-small">
        <div className="footer-copyright text-center py-3">© 2025 Copyright</div>
      </footer>
      {/* ================= Lábjegyzet szakasz vége ================= */}
    </div>
  );
};

export default MountainBikesPage;
