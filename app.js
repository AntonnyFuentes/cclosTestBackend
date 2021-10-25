const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jobs = require("./routes/jobs");
const helmet = require("helmet");
const compression = require("compression");

const app = express();

app.use(helmet());
app.use(compression());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-", "Content-Type, Authorization");
  next();
});

app.use(jobs);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json(message);
});

mongoose
  .connect(
    `mongodb+srv://dbCclos:dbCclosPassword@cclos-test.nbecr.mongodb.net/cclos-test?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      sslValidate: false,
    }
  )
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));