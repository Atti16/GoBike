const express = require('express');
const cors = require('cors');
const fs = require('fs');
const mysql = require('mysql2');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('Frontend'));
app.set('json spaces', 2);
app.use(cors());

// MySQL kapcsolat létrehozása
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Cseréld ki a saját felhasználónevedre
    password: 'pass', // Cseréld ki a saját jelszavadra
    database: 'gobike', // Cseréld ki a saját adatbázis nevedre
    port: '3306'
});

// Kosár adatainak tárolása (ideiglenes memóriában)
let cart = [];

// TASK 4.
app.post('/addItem', addNewItem);
app.get('/getItems', getItems);
app.post('/login', loginUser);

// Kosár kezelése
app.get('/cart', (req, res) => {
    res.json(cart);
});

app.post('/cart/add', (req, res) => {
    const product = req.body;

    if (!product || !product.id || !product.name || !product.price) {
        return res.status(400).json({ message: 'Érvénytelen termék adatok' });
    }

    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    res.json({ message: 'Termék hozzáadva a kosárhoz', cart });
});

app.delete('/cart/remove/:id', (req, res) => {
    const productId = req.params.id;
    cart = cart.filter(item => item.id !== productId);
    res.json({ message: 'Termék eltávolítva a kosárból', cart });
});

app.delete('/cart/clear', (req, res) => {
    cart = [];
    res.json({ message: 'Kosár ürítve', cart });
});

// Fizetési folyamat kezelése
app.post('/checkout', (req, res) => {
    const { cardNumber, expiryDate, cvv } = req.body;

    if (!cardNumber || !expiryDate || !cvv) {
        return res.status(400).json({ message: 'Hiányzó fizetési adatok' });
    }

    console.log('Fizetési adatok:', { cardNumber, expiryDate, cvv });
    cart = [];
    res.json({ message: 'Fizetés sikeres', cart });
});

function getItems(req, res) {
    var data = fs.readFileSync('Frontend/bikesInfo.json');
    res.send(data);
}

function loginUser(req, res) {
    const { userEmail, userPassword } = req.body;

    connection.query('SELECT * FROM users WHERE email = ? AND pass = ?', [userEmail, userPassword], (error, results) => {
        if (error) {
            return res.status(500).send({ message: 'Database error' });
        }
        if (results.length > 0) {
            res.status(200).send({
                message: true,
                userId: results[0].id,
                userEmail: results[0].email
            });
        } else {
            res.status(404).send({ message: false });
        }
    });
}

function addNewItem(req, res) {
    let bike = req.body;
    if (!fs.existsSync('Frontend/bikesInfo.json')) {
        res.status(404);
        res.send({ status: "File not found" });
        return;
    }
    var data = fs.readFileSync('Frontend/bikesInfo.json');
    var data2 = JSON.parse(data);
    var lastId = Object.keys(data2).length + 1;
    bike.id = lastId.toString();
    var newJson = '{ ';
    for (var i = 1; i <= Object.keys(data2).length; i++) {
        newJson += '"' + i + '": ' + JSON.stringify(data2[i], null, 2) + ', ';
    }
    var d = '"' + lastId + '": ' + JSON.stringify(bike, null, 2);
    newJson += d;
    newJson += '}';
    fs.writeFileSync('Frontend/bikesInfo.json', newJson);
    console.log('Item added');
    reply = { status: "added", bike: bike }
    res.send(reply);
}

console.log('Server is listening on port: 3000');
app.listen(3000);