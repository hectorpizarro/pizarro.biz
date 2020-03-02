const express = require("express");
const path = require("path");
const createError = require("http-errors");
const logger = require("morgan");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// All React assets are static, server as requested
app.use(express.static(path.join(__dirname, "build")));

// === Route paths

// /ping route for testing purposes
app.get("/ping", (req, res) => res.send("pong")); // Test API

// /experiences route loads json/experiences.json
app.get("/experiences", (req, res) =>
  res.status(200).sendFile(path.join(__dirname, "json", "experiences.json"))
);

app.post("/mail", async (req, res) => {
  const { email, name, message } = req.body;
  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: "hpizarro@gmail.com",
    from: email,
    subject: `Mail from Hector site - ${name}`,
    text: message,
    html: message
  };
  try {
    await sgMail.send(msg);
    res.status(200).json({ message: "OK" });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Default route loads build/index.html
app.use((req, res) =>
  res.sendFile(path.join(__dirname, "build", "index.html"))
);

app.listen(process.env.PORT || 9000);
