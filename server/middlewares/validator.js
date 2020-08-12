const Joi = require('joi');

exports.validateCreateUser = (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().min(4).required(),
    name: Joi.string().min(2).required(),
    nickname: Joi.string().min(2).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    res.status(400).send(error); // invalid request body
    return;
  }
  next();
};

// validate에서 사용하는 공통 변수 따로 뺴기 (validator 추가하면서)

// 1. passport > 401 , 2. isAuthenticated로 따로 빼기, 3.validator 변수 따로뺴기
