const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const usersRoute = require("./routes/users");
const assignmentsRoute = require("./routes/assignments");
const { logger, logEvents } = require('./middleware/logger');

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

// routes with prefix
app.use("/users", usersRoute);
app.use("/assignments", assignmentsRoute);

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
