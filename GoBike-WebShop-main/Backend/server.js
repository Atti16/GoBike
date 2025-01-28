var express = require('express');
const cors = require('cors'); 
var fs = require('fs');
const mysql = require('mysql2'); // Importáljuk a mysql2 csomagot

var app = express();

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

// TASK 4.
//Product adding: after submitting a new product using the form, send the data to the server (use the POST method). Add the new product to the list of products.
app.post('/addItem', addNewItem); 
//Product loading: the basic product offer should be downloaded from the server (use the GET method). Show products in a "dynamic table" upon successful load.
app.get('/getItems', getItems);
//Login: Simulate user login. When you click on the login button, send the information to the server (via the POST method).
app.post('/login', loginUser );

function getItems(req, res) {
    // Sync will wait until all data is loaded
    var data = fs.readFileSync('Frontend/bikesInfo.json');
    res.send(data);
}

function loginUser (req, res) {
    const { userEmail, userPassword } = req.body;

    // SQL lekérdezés a felhasználó keresésére
    connection.query('SELECT * FROM users WHERE email = ? AND pass = ?', [userEmail, userPassword], (error, results) => {
        if (error) {
            return res.status(500).send({ message: 'Database error' });
        }
        if (results.length > 0) {
            // Felhasználó megtalálva
            res.status(200).send({
                message: true,
                userId: results[0].id,
                userEmail: results[0].email
            });
        } else {
            // Felhasználó nem található
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
module.exports = app;
app.listen(3000); 
