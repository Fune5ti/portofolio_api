require("dotenv").config();
const express = require("express");
const databaseConnection = require("../config/database");

const app = express();
const port = process.env.PORT || 3333;

databaseConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
