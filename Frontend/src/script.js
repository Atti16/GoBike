
function addToCart() {
    const item = {
        name: document.getElementById('dynamicItemName').innerText,
        price: 700, // Példa ár, ezt dinamikusan is beállíthatod
        size: document.getElementById('itemSize').value,
        color: document.getElementById('itemColor').value,
        quantity: document.getElementById('qty').value
    };

    // Kosár tartalmának lekérése a localStorage-ból
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item); // Új termék hozzáadása a kosárhoz
    localStorage.setItem('cart', JSON.stringify(cart)); // Kosár frissítése

    alert('Termék hozzáadva a kosárhoz!');
}

function generateTable() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsDiv = document.getElementById('cartItems');
    cartItemsDiv.innerHTML = '';

    if (cart.length === 0) {
        document.getElementById('cartItemsHeader').innerText = 'Your shopping cart is empty...';
        return;
    }

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <p>${item.name} - ${item.price}$</p>
            <p>Size: ${item.size}, Color: ${item.color}, Quantity: ${item.quantity}</p>
            <button class="btn btn-sm btn-danger" onclick="removeItem(${index})">Remove</button>
            <hr>
        `;
        cartItemsDiv.appendChild(itemDiv);
    });
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Termék eltávolítása a kosárból
    localStorage.setItem('cart', JSON.stringify(cart)); // Kosár frissítése
    generateTable(); // Kosár tartalmának újratöltése
}

function clearBasket() {
    localStorage.removeItem('cart'); // Kosár ürítése
    generateTable(); // Kosár tartalmának újratöltése
}

// Oldal betöltésekor jelenítsük meg a kosár tartalmát
window.onload = generateTable;