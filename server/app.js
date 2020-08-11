const express = require("express");
const path = require("path");
const logger = require("morgan");
const passport = require("passport");

require("dotenv").config();

const { sequelize } = require("./models");

sequelize
  .authenticate()
  .then(() => console.log("🚀Connection Created!"))
  .catch((err) => {
    console.log(err);
  });

sequelize.sync({ force: true });

const router = require("./routes");
const app = express();

// view engine setup
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.set("views", path.join(__dirname, "../client/dist"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(passport.initialize());

app.use("/", router);

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  console.log(err);
  console.log(err.message);
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  if (err.message.includes("undefined")) err.status = 400;

  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
