const Joi = require('joi');
const { HTTP_STATUS } = require('../utils/constants');

const EMAIL = Joi.string().email().required();
const NUMBER = Joi.number();
const NUMBER_REQUIRED = Joi.number().required();
const STRING = Joi.string();
const STRING_REQUIRED = Joi.string().required();
const ARRAY = (type) => Joi.array().items(type);

const errorHandler = (error, res, next) => {
  if (error) {
    res.status(HTTP_STATUS.BAD_REQUEST).send(error);
    return;
  }
  next();
};

/* User validation */
exports.validateCreateUser = (req, res, next) => {
  console.log(req.body);
  const schema = Joi.object().keys({
    email: EMAIL,
    password: STRING_REQUIRED,
    name: STRING_REQUIRED,
    nickname: STRING_REQUIRED,
  });
  const { error } = schema.validate(req.body);
  errorHandler(error, res, next);
};

exports.validateUpdateUserInterest = (req, res, next) => {
  const schema = Joi.object().keys({
    productId: NUMBER_REQUIRED,
  });

  const { error } = schema.validate(req.params);
  errorHandler(error, res, next);
};

/* Category validation */
exports.validateCreateCategory = (req, res, next) => {
  const schema = Joi.object().keys({
    name: STRING_REQUIRED,
  });
  const { error } = schema.validate(req.body);
  errorHandler(error, res, next);
};

/* SubCategory validation */
exports.validateGetSubcategory = (req, res, next) => {
  const schema = Joi.object().keys({
    categoryId: NUMBER_REQUIRED,
  });
  const { error } = schema.validate(req.params);
  errorHandler(error, res, next);
};

exports.validateCreateSubCategory = (req, res, next) => {
  const schema = Joi.object().keys({
    categoryId: NUMBER_REQUIRED,
    name: STRING_REQUIRED,
  });
  const { error } = schema.validate(req.body);
  errorHandler(error, res, next);
};

/* Product validation */
exports.validateCreateProduct = (req, res, next) => {
  const schema = Joi.object().keys({
    subcategoryId: NUMBER_REQUIRED,
    title: STRING_REQUIRED,
    price: NUMBER_REQUIRED,
    discountedPrice: NUMBER,
    discountedRate: NUMBER,
    quantity: NUMBER_REQUIRED,
    imageUrl: STRING_REQUIRED,
  });

  const { error } = schema.validate(req.body);
  errorHandler(error, res, next);
};

/* Order validation */
exports.validateCreateOrder = (req, res, next) => {
  const schema = Joi.object().keys({
    productIds: ARRAY(NUMBER),
  });

  const { error } = schema.validate(req.body);
  errorHandler(error, res, next);
};

exports.validateGetOrderOne = (req, res, next) => {
  const schema = Joi.object().keys({
    orderId: NUMBER_REQUIRED,
  });

  const { error } = schema.validate(req.params);
  errorHandler(error, res, next);
};

/* Banner validation */
exports.validateCreateBanner = (req, res, next) => {
  const schema = Joi.object().keys({
    imageUrl: STRING_REQUIRED,
    redirectUrl: STRING_REQUIRED,
    order: NUMBER_REQUIRED,
    placement: STRING_REQUIRED,
    expiredAt: STRING_REQUIRED,
    startedAt: STRING_REQUIRED,
  });
  const { error } = schema.validate(req.body);
  errorHandler(error, res, next);
};

exports.validateDeleteBanner = (req, res, next) => {
  const schema = Joi.object().keys({
    bannerId: NUMBER_REQUIRED,
  });
  const { error } = schema.validate(req.params);
  errorHandler(error, res, next);
};
