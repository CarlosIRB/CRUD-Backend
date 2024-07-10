// services/persona.service.js
const PersonaDAO = require("../dao/persona.dao");
const Persona = require("../models/persona.model");

class PersonaService {
  static getAll(callback) {
    PersonaDAO.getAll(callback);
  }

  static getById(id, callback) {
    PersonaDAO.getById(id, callback);
  }

  static create(personaData, callback) {
    const persona = new Persona(
      null,
      personaData.nombre,
      personaData.apellido,
      personaData.direccion,
      personaData.telefono
    );
    PersonaDAO.create(persona, callback);
  }

  static update(id, personaData, callback) {
    const persona = new Persona(
      id,
      personaData.nombre,
      personaData.apellido,
      personaData.direccion,
      personaData.telefono
    );
    PersonaDAO.update(id, persona, callback);
  }

  static delete(id, callback) {
    PersonaDAO.delete(id, callback);
  }

  static checkConnection(callback) {
    PersonaDAO.checkConnection(callback);
  }
}

module.exports = PersonaService;
