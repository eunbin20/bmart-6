const Category = require('../models/category');
const { HTTP_STATUS } = require('../utils/constants');

exports.create = async (req, res) => {
  const category = await Category.create(req.body);
  res.status(HTTP_STATUS.CREATE_SUCCESS).send(category);
};

exports.update = async (req, res) => {
  await Category.update(req.body, { where: { id: req.body.id } });
  res.status(HTTP_STATUS.SUCCESS).send({ completed: true });
};

exports.delete = async (req, res) => {
  await Category.update({ isDeleted: true }, { id: req.params.id });
  res.status(HTTP_STATUS.SUCCESS).send({ completed: true });
};

exports.findAll = async (req, res) => {
  const categories = await Category.findAll();
  res.status(HTTP_STATUS.SUCCESS).send(categories);
};
