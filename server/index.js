const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

dotenv.config();

/* MongoDB Connection */
mongoose
  .connect(
    "mongodb+srv://user:user@smavyplatform.eyoabnp.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());
app.options("*", cors());

app.listen(8800, () => {
  console.log("Backend server is running at port 8800!");
});
