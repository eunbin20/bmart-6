const User = require("../models/user");
const { createPasswordHash } = require("../utils/salt");

exports.login = async (req, res) => {
  console.log(req.user);
  res.status(200).json("");
};

exports.create = async (req, res) => {
  const { password } = req.body;
  const passwordHash = await createPasswordHash(password);
  const user = await User.create({
    ...req.body,
    password: passwordHash.password,
    salt: passwordHash.salt,
  });
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
