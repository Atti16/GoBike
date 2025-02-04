
function addToCart() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');

    const items = [
        { id: 1, name: "Marin Bolinas Ridge 1", price: "$599", rating: 4, image: "assets/images/Marin Bolinas Ridge 1 Blue.jpg" },
        { id: 2, name: "Marin Bolinas Ridge 2", price: "$699", rating: 4.5, image: "assets/images/Marin Bolinas Ridge 2 Black.jpg" },
        { id: 3, name: "Marin Gestalt", price: "$1099", rating: 5, image: "assets/images/Marin Gestalt Blue.jpg" },
        { id: 4, name: "Polygon Strattos S5 - Shimano 105", price: "$1299", rating: 5, image: "assets/images/Polygon Strattos S5 - Shimano 105.jpg" },
        { id: 5, name: "Marin Kentfield CS2 ST", price: "$769", rating: 4.5, image: "assets/images/Marin Kentfield CS2 ST Grey.jpg" },
        { id: 6, name: "Polygon Sierra Deluxe Sport", price: "$599", rating: 4, image: "assets/images/Polygon Sierra Deluxe Sport.jpg" },
        { id: 7, name: "Polygon Mt Bromo N7", price: "$4399", rating: 5, image: "assets/images/Polygon Mt Bromo N7.jpg" },
        { id: 8, name: "Polygon Mt Bromo N8", price: "$5999", rating: 5, image: "assets/images/Polygon Mt Bromo N8.jpg" }
    ];

    const item = items.find(i => i.id == itemId);

    if (item) {
        const quantity = document.getElementById('qty').value;
        const size = document.getElementById('itemSize').value;
        const color = document.getElementById('itemColor').value;

        const cartItem = {
            ...item,
            quantity: quantity,
            size: size,
            color: color
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Ellenőrizzük, hogy a termék már szerepel-e a kosárban
        const existingItem = cart.find(i => i.id === itemId && i.size === size && i.color === color);
        if (existingItem) {
            existingItem.quantity = parseInt(existingItem.quantity) + parseInt(quantity); // Mennyiség növelése
        } else {
            cart.push(cartItem); // Új termék hozzáadása
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert("Termék hozzáadva a kosárhoz!");
    }
}