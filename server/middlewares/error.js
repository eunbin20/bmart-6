exports.errorMiddleware = (err, req, res, next) => {
  // set locals, only providing error in development
  console.log(err);
  console.log(err.message);
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  if (err.message.includes("undefined")) err.status = 400;

  res.status(err.status || 500);
  res.send(err.message);
};
