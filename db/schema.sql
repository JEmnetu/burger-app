DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;


CREATE TABLE burgers (
id INT AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(225) NOT NULL,
devoured BOOLEAN NOT NULL,
createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY(id)

);