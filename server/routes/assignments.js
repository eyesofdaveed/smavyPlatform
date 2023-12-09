const router = require('express').Router();

const Assignments = require('../models/Assignments');
const Entity = require('../api');

const checkRole = require('../middleware/checkRole');
const errorHandler = require('../middleware/errorHandler');
const { ROLES } = require('../enums');

const assignment = new Entity(Assignments);
const modelName = 'Assignment';

router.route('/').post(async (req, res) => {
  try {
    await assignment.add(req, res);
  } catch (err) {
    errorHandler(err, req, res);
  }
});

router.route('/').get(async (req, res) => {
  try {
    await assignment.getAll(req, res);
  } catch (err) {
    errorHandler(err, req, res);
  }
});

router.route('/:id').delete(async (req, res) => {
  try {
    await assignment.delete(req, res, modelName);
  } catch (err) {
    errorHandler(err, req, res);
  }
});

router.route('/:id').get(async (req, res) => {
  try {
    await assignment.getById(req, res, modelName);
  } catch (err) {
    errorHandler(err, req, res);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const entityId = req.params.id;
    const {} = req.body;
    const fieldsToUpdate = {};

    await assignment.update({ entityId, fieldsToUpdate, req, res });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

module.exports = router;
