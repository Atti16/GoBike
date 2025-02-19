import React, { useState } from 'react';

const ItemInsert = () => {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [rate, setRate] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = () => {
    // Add your logic here to handle the form submission
    setAlertMessage('Termék hozzáadva!');
  };

  return (
    <div>
      {/* Navigation */}
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
              <li className="nav-item">
                <a className="nav-link" href="shop.html">Bolt</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact.html">Kapcsolat</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div className="container container-height">
        <div className="row justify-content-center">
          <div className="col-12 col-xs-10 col-sm-8 col-md-8 col-lg-8 col-xl-8 mb-4">
            <div className="form-group">
              <label htmlFor="InputItemName">Név</label>
              <input
                type="text"
                className="form-control"
                id="inputItemName"
                placeholder="Kerékpár neve"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="formControlTextarea1">Leírás</label>
              <textarea
                className="form-control"
                id="formControlTextarea1"
                rows="5"
                placeholder="Kerékpár leírása"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="inputRate">Értékelés</label>
              <input
                type="text"
                className="form-control"
                id="inputRate"
                placeholder="Értékelés"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Ár</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="itemPrice">$</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="newItemPrice"
                  placeholder="Ár"
                  pattern="^[0-9]*$"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="image">Kép</label>
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
            <br />
            <button onClick={handleSubmit} className="btn btn-primary btn-block">
              Beszúrás
            </button>
            {alertMessage && <div id="addedAlert" className="mt-2">{alertMessage}</div>}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="page-footer font-small">
        <div className="footer-copyright text-center py-3">© 2025 Szerzői jogok</div>
      </footer>
    </div>
  );
};

export default ItemInsert;
