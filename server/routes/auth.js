const router = require('express').Router();

const handleLogin = require('../controllers/authController');
/**
 * @swagger
 * /auth:
 *   post:
 *     summary: User authentication
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *           examples:
 *             example1:
 *               value:
 *                 email: "123@123.kz"
 *                 password: "password"
 *     responses:
 *       200:
 *         description: Successfully authorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJlbWFpbCI6IjEyM0AxMjMua3oiLCJmaXJzdE5hbWUiOiJEYXVsZXQifSwiaWF0IjoxNjk5ODgzOTU5LCJleHAiOjE2OTk4ODc1NTl9.5fKqhQ8tw7iIFHnrFIvcLsUmiBf-67Uiz3UhacebWG8"
 *               message: "Successfully authorized: 123@123.kz Firstname LastName"
 *               success: true
 *       400:
 *         description: Bad request
 */
router.post('/', handleLogin);

module.exports = router;
