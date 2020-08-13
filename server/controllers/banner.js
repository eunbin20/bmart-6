const Banner = require('../models/banner');

exports.create = async (req, res, next) => {
  const banner = await Banner.create(req.body);
  res.status(201).send(banner);
};

exports.findAll = async (req, res, next) => {
  const banners = await Banner.findAll();
  res.status(200).send(banners);
};

exports.delete = async (req, res) => {
  await Banner.destroy({ where: { id: req.params.bannerId } });
  res.status(200).send({ completed: true });
};
