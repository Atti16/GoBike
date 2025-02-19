import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    changeLoginText(); // Assuming this function is defined elsewhere
  }, []);

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
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="shopping-cart.html"><img style={{ height: '30px' }} src="assets/icons/shopping-cart-white.png" alt="Cart" /></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* Contact Area */}
      <div className="container pt-4">
        <div className="row">
          <div className="col-12 mb-4">
            <h2>Vedd fel velünk a kapcsolatot:</h2>
            <span>
              A Go-Bicikli Shop-nál kiemelten fontos számunkra a kiváló ügyfélszolgálat. Kérjük, bátran vedd fel velünk a kapcsolatot e-mailben vagy telefonon, és mi mindent megteszünk, hogy segítsünk, amiben csak tudunk.
            </span>
            <br />
            <ul style={{ listStyleType: 'none', display: 'inline' }}>
              <li>
                <img src="assets/icons/mail.png" className="icon" alt="Mail" /> E-mail: <b>Kérjük, töltsd ki </b><a href="contactForm.html">online űrlapunkat itt</a>
              </li>
              <li>
                <img src="assets/icons/phone-call.png" className="icon" alt="Phone" /> Telefon - Ügyfélszolgálat: (650) 272-3778 Hétfőtől Péntekig 9:00 - 17:00 PST
              </li>
              <li>
                <img src="assets/icons/location.png" className="icon" alt="Location" /><b> Go-Bicikli Shop Inc.</b> 2711 West Loker Ave, Carlsbad 92010, California, USA
              </li>
            </ul>
          </div>
          <div className="col-12 mb-4">
            <h3>Ügyfélszolgálati Nyitvatartás</h3>
            <table>
              <thead>
                <tr>
                  <th>Napok</th>
                  <th>Órák</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Hétfő</td>
                  <td>9:00 - 17:00</td>
                </tr>
                <tr>
                  <td>Kedd</td>
                  <td>9:00 - 17:00</td>
                </tr>
                <tr>
                  <td>Szerda</td>
                  <td>9:00 - 17:00</td>
                </tr>
                <tr>
                  <td>Csütörtök</td>
                  <td>9:00 - 17:00</td>
                </tr>
                <tr>
                  <td>Péntek</td>
                  <td>9:00 - 17:00</td>
                </tr>
                <tr>
                  <td>Szombat/Vasárnap</td>
                  <td>Csak online rendelések. A rendelések feldolgozása akár 5 munkanapot is igénybe vehet.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-12 mb-4" style={{ minHeight: '350px' }}>
            {/* Google Map */}
            <iframe
              className="col-12 h-100"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3341.118929719889!2d-117.26114508520129!3d33.13223998086627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc7498ffac23c3%3A0xca7213f56f0c4b5b!2s2711%20Loker%20Ave%20W%2C%20Carlsbad%2C%20CA%2092010%2C%20USA!5e0!3m2!1sen!2ssi!4v1648934455471!5m2!1sen!2ssi"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <hr />
      <br />
      <div className="justify-content-md-center pt-1">
        <form>
          <div className="container justify-content-md-center">
            <div className="row mb-3 text-center">
              <h4 className="col-12">Iratkozz fel hírlevelünkre a legfrissebb hírekért és ajánlatokért</h4>
              <div className="col-4 pr-1">
                <input type="text" className="form-control" placeholder="Név" name="name" required />
              </div>
              <div className="col-4 pr-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email cím"
                  name="mail"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
                />
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
        <div className="footer-copyright text-center py-3">© 2025 Copyright</div>
      </footer>
    </div>
  );
};

export default Contact;
