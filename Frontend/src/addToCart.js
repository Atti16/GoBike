function addToCart() {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');

    // Példa adatok (ezt később lecserélheted valós adatokra)
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
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert("Termék hozzáadva a kosárhoz!");
    }
}