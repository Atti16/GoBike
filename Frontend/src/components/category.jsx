import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-md navbar-light fixed-top topnav">
      <a className="navbar-brand" href="home.html">
        Go-Bicikli
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link color-white" to="/home">
              Főoldal <span className="sr-only">(aktív)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/category">
              Kategóriák
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shop">
              Bolt
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Kapcsolat
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/shopping-cart">
              <img
                style={{ height: "30px" }}
                src="assets/icons/shopping-cart-white.png"
                alt="Cart"
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

const CategoryCard = ({ imgSrc, title, id }) => (
  <div className="col-12 col-lg-4 col-md-5 col-sm-12 col-xl-3 mb-2">
    <div className="galery-card">
      <img src={imgSrc} alt={title} className="galery-card-photo" />
      <h5>{title}</h5>
      <Link
        className="btn btn-secondary btn-block"
        to={`/single-item/${id}`}
      >
        Tovább
      </Link>
    </div>
  </div>
);

const Categories = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-12 col-sm-3 col-md-3 col-lg-3 pt-2 p-0">
        <ul className="vertical-nav navbar-nav">
          <h2 className="vertical-nav-element" style={{ backgroundColor: "#D8D2CB" }}>
            <small>Kategóriák:</small>
          </h2>
          <li>
            <Link to="/categories/mountain">Hegyi</Link>
          </li>
          <li>
            <Link to="/categories/gravel">Gravel</Link>
          </li>
          <li>
            <Link to="/categories/road">Út</Link>
          </li>
          <li>
            <Link to="/categories/city">Városi</Link>
          </li>
          <li>
            <Link to="/categories/electric">Elektromos</Link>
          </li>
        </ul>
      </div>

      <div className="col-12 col-sm-9 col-md-9 col-lg-9 pt-2 pt-4">
        {/* Mountain Bikes */}
        <div>
          <h3>Hegyi Kerékpárok</h3>
          <hr />
          <p>
            A hegyi kerékpárok tökéletesek azok számára, akik kényelmes közlekedést, családi kirándulásokat és kalandokat keresnek az ismeretlen úton. Emellett ideálisak olyan túrákra, amelyek mindent tartalmaznak: hosszú, hullámzó terep, technikai részek és izgalmas lejtők.
          </p>
          <div className="container mb-3">
            <div className="row">
              <CategoryCard
                imgSrc="assets/images/Marin Bolinas Ridge 1 Blue.jpg"
                title="Marin Bolinas Ridge 1"
                id={1}
              />
              <CategoryCard
                imgSrc="assets/images/Marin Bolinas Ridge 2 Black.jpg"
                title="Marin Bolinas Ridge 2"
                id={2}
              />
            </div>
          </div>
        </div>

        {/* Gravel Bikes */}
        <div>
          <h3>Gravel Kerékpárok</h3>
          <hr />
          <p>
            Könnyű, gyors és agilis, teljesítményorientált kerékpárjaink ideálisak, ha egy helyi KOM-ot szeretnél elérni, vagy megnyerni a következő kritikus versenyt.
          </p>
          <div className="container mb-3">
            <div className="row">
              <CategoryCard
                imgSrc="assets/images/Marin Gestalt Blue.jpg"
                title="Marin Gestalt"
                id={3}
              />
            </div>
          </div>
        </div>

        {/* Road Bikes */}
        <div>
          <h3>Út Kerékpárok</h3>
          <hr />
          <p>
            Az úti kerékpárok tökéletesek azoknak, akik egyszerűen csak pedálozni szeretnének – ideálisak azok számára, akik bárhová el szeretnének jutni.
          </p>
          <div className="container mb-3">
            <div className="row">
              <CategoryCard
                imgSrc="assets/images/Polygon Strattos S5 - Shimano 105.jpg"
                title="Polygon Strattos S5 - Shimano 105"
                id={4}
              />
            </div>
          </div>
        </div>

        {/* City Bikes */}
        <div>
          <h3>Városi Kerékpárok</h3>
          <hr />
          <p>
            Ha a tengerpart mentén szeretnél tekerni, vagy egyszerűen csak kényelmesen eljutni a kávézóba, akkor ezek a kerékpárok tökéletesek számodra.
          </p>
          <div className="container mb-3">
            <div className="row">
              <CategoryCard
                imgSrc="assets/images/Marin Kentfield CS2 ST Grey.jpg"
                title="Marin Kentfield CS2 ST"
                id={5}
              />
              <CategoryCard
                imgSrc="assets/images/Polygon Sierra Deluxe Sport.jpg"
                title="Polygon Sierra Deluxe Sport"
                id={6}
              />
            </div>
          </div>
        </div>

        {/* Electric Bikes */}
        <div>
          <h3>Elektromos Kerékpárok</h3>
          <hr />
          <p>
            A Polygon Mt Bromo N7 erőssége és tartóssága nem csorbult; a Shimano 504 Wh integrált akkumulátorának köszönhetően könnyedén megőrzi a stabilitást és könnyen irányítható.
          </p>
          <div className="container mb-3">
            <div className="row">
              <CategoryCard
                imgSrc="assets/images/Polygon Mt Bromo N7.jpg"
                title="Polygon Mt Bromo N7"
                id={7}
              />
              <CategoryCard
                imgSrc="assets/images/Polygon Mt Bromo N8.jpg"
                title="Polygon Mt Bromo N8"
                id={8}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="page-footer font-small">
    <div className="footer-copyright text-center py-3">
      © 2025 Copyright
    </div>
  </footer>
);

const HomePage = () => (
  <div>
    <Header />
    <Categories />
    <Footer />
  </div>
);

export default HomePage;
