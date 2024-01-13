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
const studentRoute = require('./routes/students');
const teacherRoute = require('./routes/teachers');
const logoutRoute = require('./routes/logout');
const registerRoute = require('./routes/register');
const { logger, logEvents } = require('./middleware/logger');
const verifyJwt = require('./middleware/verifyJwt');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const port = process.env.PORT || 8800;

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
const corsConfig = {
  origin: true,
  credentials: true,
};

const specs = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

dotenv.config();

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
app.use(cors(corsConfig));
app.options('*', cors(corsConfig));
app.use(cookieParser());

app.use('/register', registerRoute);
app.use('/auth', authRoute);
app.use(verifyJwt);

// authorized routes
app.use('/students', studentRoute);
app.use('/teachers', teacherRoute);
app.use('/logout', logoutRoute);
app.use('/users', usersRoute);
app.use('/assignments', assignmentsRoute);

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(port, () => {
    console.log('Backend server is running at: ', port);
  });
});

mongoose.connection.on('error', err => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    'mongoErrLog.log',
  );
});

//It should be at the end
app.use(function (req, res) {
  return res.status(404).json({ message: 'Endpoint not found' });
});
