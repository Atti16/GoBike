function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItems = document.getElementById('cartItems');

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>A kosár üres.</p>";
    } else {
        let html = "<ul>";
        cart.forEach(item => {
            html += `<li>${item.name} - ${item.price}</li>`;
        });
        html += "</ul>";
        cartItems.innerHTML = html;
    }
}