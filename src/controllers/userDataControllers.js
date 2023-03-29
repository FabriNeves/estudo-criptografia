import exercicios from "../models/userDataSchema.js";

import { Op } from "sequelize";

const modelName = exercicios;

const genericController = {
  async read(req, res) {

    try {
      const Model = modelName;
      const data = await Model.findAll();
      res.json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async readById(req, res) {
    const { id } = req.params;

    try {
      const Model = modelName;
      const data = await Model.findByPk(id);
      if (data) {
        res.json(data);
      } else {
        res.status(404).send(`${modelName} not found.`);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async create(req, res) {
    const newData = req.body;

    try {
      const Model = modelName;
      const data = await Model.create(newData);
      res.json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async update(req, res) {
    const { id } = req.params;
    const updates = req.body;

    try {
      const Model = modelName;
      const data = await Model.findByPk(id);
      if (data) {
        if (updates) {
          await data.update(updates);
          res.json(data);
        } else {
          res.status(406).send("Empty update.");
        }
      } else {
        res.status(404).send(`${modelName} not found.`);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },

  async delete(req, res) {
    const { id } = req.params;

    try {
      const Model = modelName;
      const data = await Model.findByPk(id);
      if (data) {
        await data.destroy();
        res.send(`${modelName} deleted.`);
      } else {
        res.status(404).send(`${modelName} not found.`);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  },
  async readAllbyID(req, res) {
    
    try {
      const Model = modelName;
      const data = await Model.findAll( {where : { idUser: req.userId }});
      res.json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  },

 
};

export default genericController;
