const Joi = require("joi");

exports.validateCreateUser = (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().min(4).required(),
    name: Joi.string().min(2).required(),
    nickname: Joi.string().min(2).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    error.status = 400; // invalid request status
    next(error);
  }
  next();
};
