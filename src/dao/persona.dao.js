const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        process.exit(1);
      }
  console.log('Conexión a MySQL exitosa!');
});

class PersonaDAO {
    static getAll(callback) {
        connection.query('SELECT * FROM personas', (err, results) => {
          if (err) return callback(err);
          callback(null, results);
        });
      }
    
      static getById(id, callback) {
        connection.query('SELECT * FROM personas WHERE id = ?', [id], (err, results) => {
          if (err) return callback(err);
          callback(null, results);
        });
      }
    
      static create(persona, callback) {
        const { nombre, apellido, direccion, telefono } = persona;
        connection.query(
          'INSERT INTO personas (nombre, apellido, direccion, telefono) VALUES (?, ?, ?, ?)',
          [nombre, apellido, direccion, telefono],
          (err, results) => {
            if (err) return callback(err);
            callback(null, results);
          }
        );
      }
    
      static update(id, persona, callback) {
        const { nombre, apellido, direccion, telefono } = persona;
        connection.query(
          'UPDATE personas SET nombre = ?, apellido = ?, direccion = ?, telefono = ? WHERE id = ?',
          [nombre, apellido, direccion, telefono, id],
          (err, results) => {
            if (err) return callback(err);
            callback(null, results);
          }
        );
      }
    
      static delete(id, callback) {
        connection.query('DELETE FROM personas WHERE id = ?', [id], (err, results) => {
          if (err) return callback(err);
          callback(null, results);
        });
      }
    
      static checkConnection(callback) {
        connection.ping(err => {
          if (err) return callback(err);
          callback(null, 'Conexión exitosa a base de datos');
        });
      }
}

module.exports = PersonaDAO;