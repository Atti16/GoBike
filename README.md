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

