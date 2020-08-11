require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const passport = require("passport");
const passportConfig = require("./lib/passport");
const { errorMiddleware } = require("./middlewares/error");

const { sequelize } = require("./models");

sequelize
  .authenticate()
  .then(() => console.log("🚀Connection Created!"))
  .catch((err) => {
    console.log(err);
  });

sequelize.sync({ force: false });

const router = require("./routes");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(passport.initialize());
passportConfig(); // strategy 등록

app.use("/api", router);

// error handler
app.use(errorMiddleware);

module.exports = app;
