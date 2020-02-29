const express = require("express");
const path = require("path");
const createError = require("http-errors");
const logger = require("morgan");
// const bodyParser = require('body-parser')

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// All React assets are static, server as requested
app.use(express.static(path.join(__dirname, "build")));

// === Route paths

// Default route loads build/index.html
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "build", "index.html"))
);

// /ping route for testing purposes
app.get("/ping", (req, res) => res.send("pong")); // Test API

// /experiences route loads json/experiences.json
app.get("/experiences", (req, res) =>
  res.status(200).sendFile(path.join(__dirname, "json", "experiences.json"))
);

// Any other route catched as 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));
// error handler
app.use((err, req, res, next) => {
  const { status = 500, message = "Error detected" } = err;
  // set locals, only providing error in development
  res.locals.message = message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(status).json({ status, message });
});

app.listen(process.env.PORT || 9000);
