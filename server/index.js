const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const usersRoute = require('./routes/users');
const assignmentsRoute = require('./routes/assignments');
const authRoute = require('./routes/auth');
const logoutRoute = require('./routes/logout');
const registerRoute = require('./routes/register');
const { logger, logEvents } = require('./middleware/logger');
const verifyJwt = require('./middleware/verifyJwt');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API',
      version: '1.0.0',
    },
  },
  apis: ['routes/*.js'], // Укажите путь к вашим файлам маршрутов
};

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

dotenv.config();

/* MongoDB Connection */
mongoose
  .connect(
    'mongodb+srv://user:user@smavyplatform.eyoabnp.mongodb.net/?retryWrites=true&w=majority',
  )
  .then(() => console.log('Database connected!'))
  .catch(err => console.log(err));

// middleware
app.use(logger);
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.use(cors());
app.options('*', cors());
// middleware for cookies
app.use(cookieParser());
// routes with prefix
app.use('/register', registerRoute);
app.use('/auth', authRoute);
app.use('/logout', logoutRoute);

app.use(verifyJwt);
app.use('/users', usersRoute);
app.use('/assignments', assignmentsRoute);

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(8800, () => {
    console.log('Backend server is running at port 8800!');
  });
});

mongoose.connection.on('error', err => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    'mongoErrLog.log',
  );
});
