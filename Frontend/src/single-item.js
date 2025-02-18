// Termék betöltése és megjelenítése
function loadItemToShow() {
    // Példa adatok, ezeket valós adatokkal kell helyettesíteni
    const item = {
        id: 1,
        name: "Marin Bolinas Ridge 2",
        description: "Ez egy kiváló hegyi kerékpár, amely minden terepen jól teljesít.",
        price: 700,
        rating: 4.5,
        images: ["assets/images/Marin Bolinas Ridge 2 Black.jpg"]
    };

    // Termék nevének beállítása
    document.getElementById('dynamicItemName').innerText = item.name;

    // Termék leírásának beállítása
    document.getElementById('dynamicItemDescription').innerText = item.description;

    // Termék árának beállítása
    document.getElementById('dynamicItemPrice').innerText = item.price + "$";

    // Termék értékelésének beállítása
    document.getElementById('dynamicItemRate').innerText = item.rating;

    // Termék képeinek beállítása
    const photosContainer = document.getElementById('dynamicItemPhotos');
    photosContainer.innerHTML = ''; // Töröljük a korábbi tartalmat
    item.images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.alt = item.name;
        imgElement.className = 'img-fluid';
        photosContainer.appendChild(imgElement);
    });
}

// Termék hozzáadása a kosárhoz
function addToCart() {
    const item = {
        id: 1, // Példa ID, ezt dinamikusan is beállíthatod
        name: document.getElementById('dynamicItemName').innerText,
        price: parseFloat(document.getElementById('dynamicItemPrice').innerText.replace('$', '')), // Ár dinamikus beállítása
        size: document.getElementById('itemSize').value,
        color: document.getElementById('itemColor').value,
        quantity: parseInt(document.getElementById('qty').value)
    };

    // Kosár tartalmának lekérése a localStorage-ból
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Ellenőrizzük, hogy a termék már szerepel-e a kosárban
    const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id && cartItem.size === item.size && cartItem.color === item.color);
    
    if (existingItemIndex !== -1) {
        // Ha a termék már szerepel a kosárban, növeljük a mennyiséget
        cart[existingItemIndex].quantity += item.quantity;
    } else {
        // Ha a termék még nem szerepel a kosárban, hozzáadjuk
        cart.push(item);
    }

    // Kosár frissítése a localStorage-ban
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Termék hozzáadva a kosárhoz!');
    displayCart(); // Kosár tartalmának frissítése
}

// Kosár tartalmának megjelenítése
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartContainer');
    cartContainer.innerHTML = ''; // Töröljük a korábbi tartalmat

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>A kosár üres.</p>';
        return;
    }

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <p>${item.name} - ${item.size} - ${item.color} - ${item.quantity} db - ${item.price * item.quantity}$</p>
        `;
        cartContainer.appendChild(itemElement);
    });
}

// Kosár tartalmának törlése
function clearCart() {
    localStorage.removeItem('cart');
    displayCart(); // Frissítjük a kosár megjelenítését
    alert('A kosár tartalma törölve!');
}

// Oldal betöltésekor futó függvények
window.onload = function() {
    loadItemToShow();
    changeLoginText();
    displayCart(); // Kosár tartalmának betöltése
};