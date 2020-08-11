const User = require("../models/user");

exports.create = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).send(user);
};

exports.update = async (req, res) => {
  await User.update(req.body, { where: { id: req.body.id } });
  res.status(200).send({ completed: true });
};

exports.delete = async (req, res) => {
  await User.update({ isDeleted: true }, { id: req.params.id });
  res.status(200).send({ completed: true });
};
