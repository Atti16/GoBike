CREATE TABLE users (
    id INT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    pass VARCHAR(255) NOT NULL
);

INSERT INTO users (id, email, pass) VALUES
(101, '', 'pass'),
(102, '', 'pass'),
(103, 'test@test', 'test');

CREATE TABLE bikes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

// Használj lekérdezéseket az adatok megtekintésére:

SELECT * FROM users;
SELECT * FROM bikes;
SELECT * FROM rentals;
