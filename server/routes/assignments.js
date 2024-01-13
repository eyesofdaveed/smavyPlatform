const router = require('express').Router();
const _ = require('lodash');

const Assignments = require('../models/Assignments');
const ApiOptimizer = require('../api');
const errorHandler = require('../middleware/errorHandler');
const checkTeacher = require('../middleware/checkTeacher');

const assignment = new ApiOptimizer(Assignments);
const modelName = 'Assignment';

// get all done
router.route('/').get(async (req, res) => {
  try {
    await assignment.getAll(req, res);
  } catch (err) {
    errorHandler(err, req, res);
  }
});

//delete an assignment by id done
router.route('/:id').delete(async (req, res) => {
  try {
    await assignment.deleteById(req, res, modelName);
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// get by id done
router.route('/:id').get(async (req, res) => {
  try {
    await assignment.getById(req, res, modelName);
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// add new assignment done
router.post('/add', checkTeacher, async (req, res) => {
  try {
    const { title, description, deadline, isComplete, status } = req.body;
    const entity = { title, description, deadline, isComplete, status };
    await assignment.add({ entity, res });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// Update assignment done
router.route('/:id').put(async (req, res) => {
  try {
    const entityId = _.get(req, 'params.id');
    const { title, description, deadline, isComplete, status } = req.body;
    const fieldsToUpdate = { title, description, deadline, isComplete, status };
    await assignment.updateById({ entityId, fieldsToUpdate, req, res });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

module.exports = router;
