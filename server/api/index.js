const _ = require('lodash');

const { isEmptyObject } = require('../utils');
const errorHandler = require('../middleware/errorHandler');

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

  async getById(req, res, entityName) {
    try {
      const entityId = _.get(req, 'params.id');
      if (!entityId) {
        return errorHandler({
          statusCode: 400,
          message: `${entityName} ID required.`,
        });
      }

      const requestedEntity = await this.entityModel
        .findOne({ _id: entityId })
        .exec();

      if (!requestedEntity) {
        return errorHandler({
          statusCode: 400,
          message: `${entityName} ID ${entityId} not found`,
        });
      }

      res.json(requestedEntity);
    } catch (err) {
      errorHandler(err, req, res);
    }
  }

  async getAll({ req, res }) {
    try {
      const pageSizeInt = parseInt(_.get(req, 'body.filter', '25'));
      const pageNumberInt = parseInt(_.get(req, 'body.filter', '1'));

      const results = await this.entityModel
        .find()
        .sort({
          createdAt: -1,
        })
        .skip(pageSizeInt * (pageNumberInt - 1))

        .limit(pageSizeInt);
      return res.json({ data: results });
    } catch (err) {
      errorHandler(err, req, res);
    }
  }

  async update({ entityId, fieldsToUpdate, res }) {
    try {
      if (isEmptyObject(fieldsToUpdate)) return;

      const entities = await this.entityModel.findByIdAndUpdate(entityId, {
        $set: fieldsToUpdate,
      });
      res.status(200).json(entities);
    } catch (err) {
      return errorHandler({
        statusCode: 400,
        message: err.errors,
      });
      //res.status(400).json({ message: err.errors });
    }
  }

  async delete(req, res, entityName) {
    try {
      const entityId = _.get(req, 'params.id');
      if (!entityId) {
        return res.status(400).json({ message: `${entityName} ID required.` });
      }

      const requestedEntity = await this.entityModel
        .findOne({ _id: req.body.id })
        .exec();

      if (!requestedEntity) {
        return errorHandler({
          statusCode: 400,
          message: `${entityName} ID ${req.body.id} not found`,
        });
      }

      const result = await this.entityModel
        .deleteOne({ _id: req.body.id })
        .exec();

      res.json(result);
    } catch (err) {
      errorHandler(err, req, res);
    }
  }

  async deleteAll(req, res, obj) {
    try {
      await this.entityModel.deleteMany(obj).exec();
    } catch (err) {
      errorHandler(err, req, res);
    }
  }
}

module.exports = Entity;
