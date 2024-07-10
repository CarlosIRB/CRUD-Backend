const PersonaService = require("../services/persona.service");

class PersonaController {
  static getAll(req, res) {
    PersonaService.getAll((err, result) => {
      if (err)
        res
          .status(500)
          .send({ message: "Error al buscar personas", error: err.message });
      else res.json(result);
    });
  }

  static getById(req, res) {
    const id = req.params.id;
    PersonaService.getById(id, (err, result) => {
      if (err)
        res
          .status(500)
          .send({ message: "Error al buscar persona", error: err.message });
      else if (result.length === 0)
        res.status(404).send({ message: "Persona no existe" });
      else res.json(result[0]);
    });
  }

  static create(req, res) {
    const personaData = req.body;
    PersonaService.create(personaData, (err, result) => {
      if (err)
        res
          .status(500)
          .send({ message: "Error al crear persona", error: err.message });
      else res.status(201).send({ id: result.insertId, ...personaData });
    });
  }

  static update(req, res) {
    const id = req.params.id;
    const personaData = req.body;
    PersonaService.update(id, personaData, (err) => {
      if (err)
        res
          .status(500)
          .send({ message: "Error actualizando persona", error: err.message });
      else res.send({ message: "Persona actualizada exitosamente" });
    });
  }

  static delete(req, res) {
    const id = req.params.id;
    PersonaService.delete(id, (err) => {
      if (err)
        res
          .status(500)
          .send({ message: "Error al borrar persona", error: err.message });
      else res.send({ message: "Persona borrada exitosamente" });
    });
  }

  static checkConnection(req, res) {
    PersonaService.checkConnection((err) => {
      if (err)
        res
          .status(500)
          .send({ message: "Conexión a base de datos fallida", error: err.message });
      else res.send({ message: "Conexión a base de datos exitosa" });
    });
  }
}

module.exports = PersonaController;
