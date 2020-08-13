const Joi = require('joi');

const PRODUCT_ID = Joi.number().required();

const errorHandler = (error, res, next) => {
  if (error) {
    res.status(400).send(error);
    return;
  }
  next();
};

/* User validation */
exports.validateCreateUser = (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().min(4).required(),
    name: Joi.string().min(2).required(),
    nickname: Joi.string().min(2).required(),
  });
  const { error } = schema.validate(req.body);
  errorHandler(error, res, next);
};

exports.validateUpdateUserInterest = (req, res, next) => {
  console.log(req.params);
  const schema = Joi.object().keys({
    productId: PRODUCT_ID,
  });

  const { error } = schema.validate(req.params);
  errorHandler(error, res, next);
};
