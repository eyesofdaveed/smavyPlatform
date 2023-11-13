const { isEmptyObject } = require('../utils');
const errorHandler = require('../middleware/errorHandler')

class Entity {
  constructor(entityModel) {
    this.entityModel = entityModel;
  }

  async add(entity, res) {
    try {
      const createdEntity = await this.entityModel.save(entity);
      res.status(200).json(createdEntity);
    } catch (err) {
      console.log(err);
    }
  }

  async getById() {}

  async getAll({ req, res, pageSize = '25', pageNumber = '1' }) {
    try {
      const pageSizeInt = parseInt(pageSize);
      const pageNumberInt = parseInt(pageNumber);

      const results = await this.entityModel.find().sort({
        createdAt: -1,
      }).skip(pageSizeInt * (pageNumberInt - 1)).limit(pageSizeInt);
      return res
      .json({ data: results });
    } catch (err) {
      errorHandler(err, req, res);
    }
  }

  async update({entityId, fieldsToUpdate, res}) {
    try {
      if (isEmptyObject(fieldsToUpdate)) return;

      const entities = await this.entityModel.findByIdAndUpdate(entityId, {
        $set: fieldsToUpdate,
      });
      res.status(200).json(entities);
    } catch (err) {
      return res.status(400).json({ message: err.errors });
    }
  }

  async delete() {}

  async deleteAll() {}
}

module.exports = Entity;
