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
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
    name: Joi.string().min(2).required(),
    nickname: Joi.string().min(2).required(),
  });
  const { error } = schema.validate(req.body);
  errorHandler(error, res, next);
};

exports.validateUpdateUserInterest = (req, res, next) => {
  const schema = Joi.object().keys({
    productId: PRODUCT_ID,
  });

  const { error } = schema.validate(req.params);
  errorHandler(error, res, next);
};

/* Order validation */
exports.validateCreateOrder = (req, res, next) => {
  const schema = Joi.object().keys({
    productIds: Joi.array().items(Joi.number()),
  });

  const { error } = schema.validate(req.body);
  errorHandler(error, res, next);
};

/* Banner validation */
exports.validateCreateBanner = (req, res, next) => {
  const schema = Joi.object().keys({
    imageUrl: Joi.string().required(),
    redirectUrl: Joi.string().required(),
    order: Joi.number().required(),
    placement: Joi.string().required(),
    expiredAt: Joi.string().required(),
    startedAt: Joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  errorHandler(error, res, next);
};
