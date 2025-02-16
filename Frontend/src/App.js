import React, { useState, useEffect } from 'react';

function App() {
  const [basket, setBasket] = useState([]);

  // Kosár betöltése localStorage-ból
  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || [];
    setBasket(storedBasket);
  }, []);

  // Termék hozzáadása a kosárhoz
  const add = (item, price) => {
    const c = document.getElementById("itemColor").value;
    const s = document.getElementById("itemSize").value;
    const q = document.getElementById("qty").value;

    const product = {
      id: Date.now(), 
      item: item,
      price: price,
      size: s,
      color: c,
      quantity: q,
    };

    const newBasket = [...basket, product];
    setBasket(newBasket);
    localStorage.setItem("basket", JSON.stringify(newBasket));
    alert("Item added to cart!");
  };

  // Termék törlése a kosárból
  const removeItem = (index) => {
    const newBasket = basket.filter((_, i) => i !== index);
    setBasket(newBasket);
    localStorage.setItem("basket", JSON.stringify(newBasket));
  };

  // Kosár ürítése
  const clearBasket = () => {
    setBasket([]);
    localStorage.removeItem("basket");
  };

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div>
        <label htmlFor="itemColor">Color:</label>
        <input type="text" id="itemColor" />
        <label htmlFor="itemSize">Size:</label>
        <input type="text" id="itemSize" />
        <label htmlFor="qty">Quantity:</label>
        <input type="number" id="qty" />
        <button onClick={() => add("Sample Item", 10)}>Add to Cart</button>
      </div>
      <div>
        <h2>Your Items:</h2>
        {basket.length === 0 ? (
          <p>Your shopping cart is empty...</p>
        ) : (
          <table className="col-10 mb-4">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Size</th>
                <th>Color</th>
                <th>Quantity</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {basket.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.item}</td>
                  <td>{item.price}</td>
                  <td>{item.size}</td>
                  <td>{item.color}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button onClick={() => removeItem(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <button onClick={clearBasket}>Clear Cart</button>
    </div>
  );
}

export default App;