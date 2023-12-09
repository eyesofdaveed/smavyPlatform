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

      const requestedEntity = await this.entityModel
        .findOne({ _id: entityId })
        .exec();

      if (!requestedEntity) {
        return errorHandler({
          message: `${entityName} ID ${entityId} not found`,
        });
      }

      res.status(200).json({ data: requestedEntity });
    } catch (err) {
      console.log(err);
    }
  }

  async getAll({ req, res }) {
    try {
      const pageSizeInt = parseInt(_.get(req, 'body.filter.pageSize', '25'));
      const pageNumberInt = parseInt(_.get(req, 'body.filter.pageNumber', '1'));

      const data = await this.entityModel
        .find()
        .sort({
          createdAt: -1,
        })
        .skip(pageSizeInt * (pageNumberInt - 1))
        .limit(pageSizeInt);

      return res.status(200).json({ data });
    } catch (err) {
      errorHandler(err, req, res);
    }
  }

  async updateById({ entityId, fieldsToUpdate, req, res }) {
    try {
      if (isEmptyObject(fieldsToUpdate)) return;

      for (let key in fieldsToUpdate) {
        if (!(key in this.entityModel)) {
          throw new Error(`wrong key ${key} on request`);
        }
      }
      const entity = await this.entityModel.findByIdAndUpdate(entityId, {
        $set: fieldsToUpdate,
      });
      res.status(200).json({ data: entity });
    } catch (err) {
      return errorHandler(
        {
          message: err.message,
        },
        req,
        res,
      );
    }
  }

  async deleteById(req, res, entityName) {
    try {
      const entityId = _.get(req, 'params.id');
      if (!entityId) {
        return res.status(400).json({ message: `${entityName} ID required.` });
      }

      const requestedEntity = await this.entityModel
        .findOne({ _id: entityId })
        .exec();

      if (!requestedEntity) {
        return errorHandler(
          {
            message: `${entityName} ID ${entityId} not found`,
          },
          req,
          res,
        );
      }

      const result = await this.entityModel.deleteOne({ _id: entityId }).exec();
      res.status(200).json(result);
    } catch (err) {
      errorHandler(err, req, res);
    }
  }
}

module.exports = Entity;
