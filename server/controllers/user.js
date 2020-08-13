const JWT = require('jsonwebtoken');
const UserProductRelation = require('../models/user_product_relation');
const User = require('../models/user');
const { createPasswordHash } = require('../utils/salt');

exports.login = async (req, res) => {
  const { user } = req;
  const accessToken = JWT.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24, // 1일
  });
  res.status(200).send({ accessToken });
};

exports.create = async (req, res) => {
  const { email, password } = req.body;
  const result = await User.findOne({ where: { email } });
  if (result) {
    res.status(409).send(''); // duplicate
    return;
  }
  const passwordHash = await createPasswordHash(password);
  const user = await User.create({
    ...req.body,
    password: passwordHash.password,
    salt: passwordHash.salt,
  });
  res.status(201).send(user);
};

exports.update = async (req, res) => {
  await User.update(req.body, { where: { id: req.user.id } });
  res.status(200).send({ completed: true });
};

exports.delete = async (req, res) => {
  await User.update({ isDeleted: true }, { id: req.user.id });
  res.status(200).send({ completed: true });
};

exports.addInterestProduct = async (req, res) => {
  const {
    user,
    params: { productId },
  } = req;
  await UserProductRelation.create({ userId: user.id, productId });
  res.status(201).send({ completed: true });
};

exports.deleteInterestProduct = async (req, res) => {
  const {
    user,
    params: { productId },
  } = req;
  await UserProductRelation.destroy({ where: { userId: user.id, productId } });
  res.status(200).send({ completed: true });
};
