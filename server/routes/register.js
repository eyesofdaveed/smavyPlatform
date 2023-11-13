const router = require('express').Router();

const handleNewUser = require('../controllers/registerController');

// register a new user
/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *           examples:
 *             example1:
 *               value:
 *                 firstName: "John"
 *                 lastName: "Doe"
 *                 email: "john@example.com"
 *                 password: "yourPassword"
 *                 role: "admin"
 *     responses:
 *       200:
 *         description: User registered successfully
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
router.post('/', handleNewUser);

module.exports = router;
