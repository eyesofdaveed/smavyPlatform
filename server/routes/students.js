const router = require('express').Router();
const _ = require('lodash');

const Students = require('../models/Students');
const ApiOptimizer = require('../api');
const errorHandler = require('../middleware/errorHandler');

const student = new ApiOptimizer(Students);
const modelName = 'Student';

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Get students
 *     tags: [Students]
 *     parameters:
 *       - in: query
 *         name: firstName
 *         schema:
 *           type: string
 *         description: Filter students by firstName
 *       - in: query
 *         name: lastName
 *         schema:
 *           type: string
 *         description: Filter students by lastName
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         description: Filter students by email
 *       - in: query
 *         name: group
 *         schema:
 *           type: string
 *         description: Filter students by group
 *       - in: query
 *         name: course
 *         schema:
 *           type: string
 *         description: Filter students by course
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: take
 *         schema:
 *           type: integer
 *         description: Number of students to take per page
 *     responses:
 *       200:
 *         description: Students retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Student'
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
    await student.getAll(req, res);
  } catch (err) {
    errorHandler(err, req, res);
  }
});

//delete an student by id done
router.route('/:id').delete(async (req, res) => {
  try {
    await student.deleteById(req, res, modelName);
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// get by id done
router.route('/:id').get(async (req, res) => {
  try {
    await student.getById(req, res, modelName);
  } catch (err) {
    errorHandler(err, req, res);
  }
});

// add new student
router.route('/add').post(async (req, res) => {
  try {
    const { email, firstName, lastName, group, course } = req.body;
    const entity = { email, firstName, lastName, group, course };
    await student.add({ entity, res });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
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
 */

/**
 * @swagger
 * /students/{studentId}:
 *   put:
 *     summary: Update student by ID
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: studentId
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
 *         description: Student updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Student'
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

// Update student
router.route('/:id').put(async (req, res) => {
  try {
    const entityId = _.get(req, 'params.id');
    const { group, course } = req.body;
    const fieldsToUpdate = { group, course };
    await student.updateById({ entityId, fieldsToUpdate, req, res });
  } catch (err) {
    errorHandler(err, req, res);
  }
});

module.exports = router;
