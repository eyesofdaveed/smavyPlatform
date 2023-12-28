const router = require('express').Router();

const handleLogin = require('../controllers/authController');
const handleRefreshToken = require('../controllers/authRefreshTokenController');
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

/**
 * @swagger
 * /auth/refreshToken:
 *   post:
 *     summary: Get a new accessToken
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               refreshToken:
 *                 type: string
 *           examples:
 *             example1:
 *               value:
 *                 refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhdWxldEAxMjMua3oiLCJpYXQiOjE3MDM1ODkzOTYsImV4cCI6MTczNTEyNTM5Nn0.Q3wR8BTs6IKjRPn1xh3ofcR2li7uSJY4QcaRILjB2eY"
 *     responses:
 *       200:
 *         description: Successfully get Access Token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *             example:
 *               refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhdWxldEAxMjMua3oiLCJpYXQiOjE3MDM1ODkzOTYsImV4cCI6MTczNTEyNTM5Nn0.Q3wR8BTs6IKjRPn1xh3ofcR2li7uSJY4QcaRILjB2eY"
 *               accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySW5mbyI6eyJlbWFpbCI6IjEyM0AxMjMua3oiLCJmaXJzdE5hbWUiOiJEYXVsZXQifSwiaWF0IjoxNjk5ODgzOTU5LCJleHAiOjE2OTk4ODc1NTl9.5fKqhQ8tw7iIFHnrFIvcLsUmiBf-67Uiz3UhacebWG8"
 *               success: true
 *       401:
 *         error: Invalid refreshToken
 */
router.post('/refreshToken', handleRefreshToken);

module.exports = router;
