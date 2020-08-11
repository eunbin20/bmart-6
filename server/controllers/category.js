const Category = require("../models/category");

exports.create = async (req, res) => {
  const category = await Category.create(req.body);
  res.send(category);
};

exports.update = async (req, res) => {
  await Category.update(req.body, { where: { id: req.body.id } });
  res.status(200).send({ completed: true });
};

exports.delete = async (req, res) => {
  await Category.update({ isDeleted: true }, { id: req.params.id });
  res.status(200).send({ completed: true });
};
