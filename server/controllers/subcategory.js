const Subcategory = require('../models/subcategory');
const { HTTP_STATUS } = require('../utils/constants');

exports.create = async (req, res) => {
  const subcategory = await Subcategory.create(req.body);
  res.status(HTTP_STATUS.CREATE_SUCCESS).send(subcategory);
};

exports.update = async (req, res) => {
  await Subcategory.update(req.body, { where: { id: req.body.id } });
  res.status(HTTP_STATUS.SUCCESS).send({ completed: true });
};

exports.delete = async (req, res) => {
  await Subcategory.update({ isDeleted: true }, { id: req.params.id });
  res.staztus(HTTP_STATUS.SUCCESS).send({ completed: true });
};

exports.findAll = async (req, res) => {
  const { categoryId } = req.params;
  const subCategories = await Subcategory.findAll({ where: { categoryId } });
  res.status(HTTP_STATUS.SUCCESS).send(subCategories);
};
