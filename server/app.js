require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const passport = require("passport");
const { errorMiddleware } = require("./middlewares/error");

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

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(passport.initialize());

app.use("/api", router);

// error handler
app.use(errorMiddleware);

module.exports = app;
