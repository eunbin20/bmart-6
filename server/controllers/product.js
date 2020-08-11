const Product = require("../models/product");
const Subcategory = require("../models/subcategory");

exports.create = async (req, res) => {
  const product = await Product.create(req.body);
  res.send(product);
};

exports.update = async (req, res) => {
  await Product.update(req.body, { where: { id: req.body.id } });
  res.status(200).send({ completed: true });
};

exports.delete = async (req, res) => {
  await Product.update({ isDeleted: true }, { id: req.params.id });
  res.status(200).send({ completed: true });
};

exports.findAll = async (req, res) => {
  const products = await Product.findAll(req.query);
  res.send(products);
};
