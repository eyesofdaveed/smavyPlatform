const router = require('express').Router();
const _ = require('lodash');

const Assignments = require('../models/Assignments');
const ApiOptimizer = require('../api');
const errorHandler = require('../middleware/errorHandler');

const assignment = new ApiOptimizer(Assignments);
const modelName = 'Assignment';

/**
 * @swagger
 * /assignments:
 *   get:
 *     summary: Get assignments
 *     tags: [Assignments]
 *     parameters:
 *       - in: query
 *         name: group
 *         schema:
 *           type: string
 *         description: Filter assignments by group
 *       - in: query
 *         name: course
 *         schema:
 *           type: string
 *         description: Filter assignments by course
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *         description: Filter assignments by status
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: take
 *         schema:
 *           type: integer
 *         description: Number of assignments to take per page
 *     responses:
 *       200:
 *         description: Assignments retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Assignment'
 *             example:
 *               data:
 *                 - id: "12345"
 *                   title: "Do it!"
 *                   description: "Do it for development"
 *                   deadline: "15.01.2024"
 *                   isComplete: False
 *                   status: "Active"
 *                 - id: "67890"
 *                   title: "Do it2!"
 *                   description: "Do it for sefl-development"
 *                   deadline: "16.01.2024"
 *                   isComplete: True
 *                   status: "Active"
 *               message: "Успешно получено"
 *       400:
 *         description: Bad request
 */

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
router.route('/add').post(async (req, res) => {
  try {
    const { title, description, deadline, isComplete, status } = req.body;
    const entity = { title, description, deadline, isComplete, status };
    await assignment.add({ entity, res });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Assignment:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         deadline:
 *           type: date
 *         isComplete:
 *           type: boolean
 *         status:
 *           type: string
 */

/**
 * @swagger
 * /assignments/{assignmentId}:
 *   put:
 *     summary: Update assignment by ID
 *     tags: [Assignments]
 *     parameters:
 *       - in: path
 *         name: assignmentId
 *         required: true
 *         type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               deadline:
 *                 type: date
 *               isComplete:
 *                 type: boolean
 *               status:
 *                 type: string
 *           examples:
 *             example1:
 *               value:
 *                 id: "12345"
 *                 title: "Do it"
 *                 description: "Do it for development"
 *                 deadline: "15.01.2024"
 *                 isComplete: False
 *                 status: "active"
 *     responses:
 *       200:
 *         description: Assignment updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Assignment'
 *             example:
 *               data:
 *                 id: "12345"
 *                 title: "Do it"
 *                 description: "Do it for development"
 *                 deadline: "15.01.2024"
 *                 isComplete: False
 *                 status: "active"
 *               message: "Успешно сохранено"
 *       400:
 *         description: Bad request
 */

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
