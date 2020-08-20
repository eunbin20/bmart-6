const Product = require('../models/product');
const { HTTP_STATUS } = require('../utils/constants');

exports.create = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(HTTP_STATUS.CREATE_SUCCESS).send(product);
};

exports.update = async (req, res) => {
  await Product.update(req.body, { where: { id: req.body.id } });
  res.status(HTTP_STATUS.SUCCESS).send({ completed: true });
};

exports.delete = async (req, res) => {
  await Product.update({ isDeleted: true }, { id: req.params.id });
  res.status(HTTP_STATUS.SUCCESS).send({ completed: true });
};

exports.filter = async (req, res) => {
  const products = await Product.filter(req.query);
  res.status(HTTP_STATUS.SUCCESS).send(products);
};

exports.findOne = async (req, res) => {
  const product = await Product.findOne({ where: { id: req.params.id } });
  res.status(HTTP_STATUS.SUCCESS).send(product);
};
