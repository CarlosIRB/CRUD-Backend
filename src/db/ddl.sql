CREATE DATABASE personas_db;

USE personas_db;

CREATE TABLE personas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100),
  apellido VARCHAR(100),
  direccion VARCHAR(255),
  telefono VARCHAR(20)
);