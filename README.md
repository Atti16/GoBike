<<<<<<< HEAD
# GoBike

-- Adatbázis létrehozása
CREATE DATABASE gobike;

-- Adatbázis használata
USE gobike;

-- Users tábla létrehozása
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Bikes tábla létrehozása
CREATE TABLE bikes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    model VARCHAR(100) NOT NULL,
    status ENUM('available', 'rented') DEFAULT 'available',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Rentals tábla létrehozása
CREATE TABLE rentals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    bike_id INT NOT NULL,
    rental_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    return_date TIMESTAMP NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (bike_id) REFERENCES bikes(id)
);

-- Példa adatok beszúrása a users táblába
INSERT INTO users (name, email, password) VALUES 
('John Doe', 'john@example.com', 'hashed_password'),
('Jane Smith', 'jane@example.com', 'hashed_password');

-- Példa adatok beszúrása a bikes táblába
INSERT INTO bikes (model) VALUES 
('Mountain Bike'),
('Road Bike');

-- Példa adatok beszúrása a rentals táblába
INSERT INTO rentals (user_id, bike_id) VALUES 
(1, 1),
(2, 2);

=======
# GoBike-WebShop
This is full-responsive web shop. Frontend - HTML,CSS, Vanilla JS and Bootstrap. Backend - Node.js

## Tutorial for node js part 4
Clone repo, navigate to Backend folder </br>
`cd Backend` </br>
Run node to install node-modules </br>
`npm install` </br>
Install mysql2</br>
`npm install mysql2`</br>
Run script </br>
`npm start` </br>
<!-- Navigate in your browser to *http://localhost:3000/LoginandRegistration.html* </br> -->

## Site is fully responsive
![bike2](https://user-images.githubusercontent.com/39196212/167292053-fecdc571-4aa5-41f0-bdce-606b121557f9.png)
![bikes1](https://user-images.githubusercontent.com/39196212/167292061-fa9c62d9-600d-457d-a547-e5eb7755bd34.png)

## To login
use test@test for email </br>
use test for password 

<-- Használj lekérdezéseket az adatok megtekintésére:

SELECT * FROM users;
SELECT * FROM bikes;
SELECT * FROM rentals; -->
>>>>>>> ddace84 (asd)
