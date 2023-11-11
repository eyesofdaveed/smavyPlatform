const router = require('express').Router();

const Users = require('../models/Users');
const Entity = require('../api');
const checkRole = require('../middleware/checkRole');
const { roles } = require('../enums');

const user = new Entity(Users);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get users
 *     tags: [Users]
 *     parameters:
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *         description: Filter users by role
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: take
 *         schema:
 *           type: integer
 *         description: Number of users to take per page
 *     responses:
 *       200:
 *         description: Users retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *             example:
 *               data:
 *                 - id: "12345"
 *                   firstName: "John"
 *                   lastName: "Doe"
 *                   email: "john@example.com"
 *                   role: "admin"
 *                 - id: "67890"
 *                   firstName: "Jane"
 *                   lastName: "Doe"
 *                   email: "jane@example.com"
 *                   role: "user"
 *               message: "Успешно получено"
 *       400:
 *         description: Bad request
 */
router.route('/').get(checkRole(Array(roles.at(0))), async (req, res) => {
  try {
    await user.getAll(res);
  } catch (err) {
    console.log(err);
  }
});

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
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
 *         role:
 *           type: string
 */

/**
 * @swagger
 * /users/{userId}:
 *   put:
 *     summary: Update user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
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
 *               role:
 *                 type: string
 *           examples:
 *             example1:
 *               value:
 *                 id: "12345"
 *                 firstName: "John"
 *                 lastName: "Doe"
 *                 email: "john@example.com"
 *                 role: "admin"
 *     responses:
 *       200:
 *         description: User updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               data:
 *                 id: "12345"
 *                 firstName: "John"
 *                 lastName: "Doe"
 *                 email: "john@example.com"
 *                 role: "admin"
 *               message: "Успешно сохранено"
 *       400:
 *         description: Bad request
 */
router.put('/:id', checkRole(Array(roles.at(0))), async (req, res) => {
  try {
    const updatedUser = await Users.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(400).json({ message: err.errors });
  }
});

module.exports = router;
