const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/api", require("./routes.js"));

module.exports = app;
