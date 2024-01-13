const router = require('express').Router();
const _ = require('lodash');

const Teachers = require('../models/Teachers');
const ApiOptimizer = require('../api');
const errorHandler = require('../middleware/errorHandler');

const teacher = new ApiOptimizer(Teachers);
const modelName = 'Teacher';

/**
 * @swagger
 * /teachers:
 *   get:
 *     summary: Get teachers
 *     tags: [Teachers]
 *     parameters:
 *       - in: query
 *         name: firstName
 *         schema:
 *           type: string
 *         description: Filter teachers by firstName
 *       - in: query
 *         name: lastName
 *         schema:
 *           type: string
 *         description: Filter teachers by lastName
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         description: Filter teachers by email
 *       - in: query
 *         name: group
 *         schema:
 *           type: string
 *         description: Filter teachers by group
 *       - in: query
 *         name: course
 *         schema:
 *           type: string
 *         description: Filter teachers by course
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: take
 *         schema:
 *           type: integer
 *         description: Number of teachers to take per page
 *     responses:
 *       200:
 *         description: Teachers retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Teacher'
 *             example:
 *               data:
 *                 - id: "12345"
 *                   firstName: "John"
 *                   lastName: "Doe"
 *                   email: "john@example.com"
 *                   group: "3F"
 *                   course: "Learning React"
 *                 - id: "67890"
 *                   firstName: "Jane"
 *                   lastName: "Doe"
 *                   email: "jane@example.com"
 *                   group: "3D"
 *                   course: "Learning Node"
 *               message: "Успешно получено"
 *       400:
 *         description: Bad request
 */

// get all done
router.route('/').get(async (req, res) => {
  try {
    await teacher.getAll(req, res);
  } catch (err) {
    errorHandler(err, req, res);
  }
});

//delete an teacher by id done
router.route('/:id').delete(async (req, res) => {
  try {
    await teacher.deleteById(req, res, modelName);
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// get by id done
router.route('/:id').get(async (req, res) => {
  try {
    await teacher.getById(req, res, modelName);
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// add new teacher done
router.route('/add').post(async (req, res) => {
  try {
    const { email, firstName, lastName, bio, groups, courses } = req.body;
    const entity = { email, firstName, lastName, bio, groups, courses };
    await teacher.add({ entity, res });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Teacher:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         email:
 *           type: string
 *         group:
 *           type: string
 *         course:
 *           type: string
 *         bio:
 *           type: string
 */

/**
 * @swagger
 * /teacher/{teacherId}:
 *   put:
 *     summary: Update teacher by ID
 *     tags: [Teachers]
 *     parameters:
 *       - in: path
 *         name: teacherId
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
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               group:
 *                 type: string
 *               course:
 *                 type: string
 *           examples:
 *             example1:
 *               value:
 *                 id: "12345"
 *                 firstName: "John"
 *                 lastName: "Doe"
 *                 email: "john@example.com"
 *                 group: "3F"
 *                 course: "Learning React"
 *     responses:
 *       200:
 *         description: Teacher updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Teacher'
 *             example:
 *               data:
 *                 id: "12345"
 *                 firstName: "John"
 *                 lastName: "Doe"
 *                 email: "john@example.com"
 *                 group: "3F"
 *                 course: "Learning React"
 *               message: "Успешно сохранено"
 *       400:
 *         description: Bad request
 */

// Update teacher done
router.route('/:id').put(async (req, res) => {
  try {
    const entityId = _.get(req, 'params.id');
    const { email, firstName, lastName, bio, groups, courses } = req.body;
    const fieldsToUpdate = { email, firstName, lastName, bio, groups, courses };
    await teacher.updateById({ entityId, fieldsToUpdate, req, res });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

module.exports = router;
