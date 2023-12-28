const _ = require('lodash');
const mongoose = require('mongoose');

const { isEmptyObject } = require('../utils');
const errorHandler = require('../middleware/errorHandler');

const INVALID_ID_ERROR = 'Invalid EntityId';
const ENTITY_NOT_FOUND = 'Entity not found';
const UPDATE_ERROR = 'Update error';
const EMPTY_ID_ERROR = 'Empty id error';

class Entity {
  constructor(entityModel) {
    this.entityModel = entityModel;
  }

  async add({ entity, res }) {
    try {
      const newEntity = new this.entityModel(entity);
      const createdEntity = await newEntity.save();
      res.status(200).json(createdEntity);
    } catch (err) {
      console.log(err);
    }
  }

  async getById(req, res, entityName) {
    try {
      const entityId = _.get(req, 'params.id');
      if (!entityId) throw new Error(EMPTY_ID_ERROR);
      if (!mongoose.Types.ObjectId.isValid(entityId))
        throw new Error(INVALID_ID_ERROR);

      const requestedEntity = await this.entityModel
        .findOne({ _id: entityId })
        .exec();

      if (!requestedEntity) throw new Error(ENTITY_NOT_FOUND);

      res.status(200).json({ data: requestedEntity });
    } catch (err) {
      errorHandler(err, req, res);
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
      if (!entityId) throw new Error(EMPTY_ID_ERROR);
      if (!mongoose.Types.ObjectId.isValid(entityId))
        throw new Error(INVALID_ID_ERROR);
      if (isEmptyObject(fieldsToUpdate) || _.isUndefined(fieldsToUpdate))
        throw new Error(UPDATE_ERROR);

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
      if (!entityId) throw new Error(INVALID_ID_ERROR);
      if (!mongoose.Types.ObjectId.isValid(entityId))
        throw new Error(INVALID_ID_ERROR);

      const requestedEntity = await this.entityModel
        .findOne({ _id: entityId })
        .exec();
      if (!requestedEntity) throw new Error(ENTITY_NOT_FOUND);

      const result = await this.entityModel.deleteOne({ _id: entityId }).exec();
      res.status(200).json(result);
    } catch (err) {
      errorHandler(err, req, res);
    }
  }
}

module.exports = Entity;
