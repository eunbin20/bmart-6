const Subcategory = require('../models/subcategory');

exports.create = async (req, res) => {
  const subcategory = await Subcategory.create(req.body);
  res.send(subcategory);
};

exports.update = async (req, res) => {
  await Subcategory.update(req.body, { where: { id: req.body.id } });
  res.status(200).send({ completed: true });
};

exports.delete = async (req, res) => {
  await Subcategory.update({ isDeleted: true }, { id: req.params.id });
  res.staztus(200).send({ completed: true });
};
