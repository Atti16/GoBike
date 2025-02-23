import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    changeLoginText();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Küldés');
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
              <li className="nav-item active">
                <a className="nav-link color-white" href="home.html">Főoldal <span className="sr-only">(jelenleg)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="category.html">Kategóriák</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="shop.html">Bolt</a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="contact.html">Kapcsolat</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Contact Form Section */}
      <div className="container container-height pt-4">
        <div className="row justify-content-center">
          <div className="col-12 col-xs-10 col-sm-8 col-md-8 col-lg-8 col-xl-8 mb-4">
            <h3>Írj nekünk üzenetet:</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email cím</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Add meg az email címet"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Leírás</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  required
                ></textarea>
              </div>
              <br />
              <button type="submit" className="btn btn-primary btn-block">
                Küldés
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="page-footer font-small">
        <div className="footer-copyright text-center py-3">© 2025 Copyright</div>
      </footer>
    </div>
  );
};

export default About;
