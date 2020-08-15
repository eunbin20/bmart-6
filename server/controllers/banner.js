const Banner = require('../models/banner');
const { HTTP_STATUS } = require('../utils/constants');

exports.create = async (req, res, next) => {
  const banner = await Banner.create(req.body);
  res.status(HTTP_STATUS.CREATE_SUCCESS).send(banner);
};

exports.findAll = async (req, res, next) => {
  const banners = await Banner.findAll();
  res.status(HTTP_STATUS.SUCCESS).send(banners);
};

exports.delete = async (req, res) => {
  await Banner.destroy({ where: { id: req.params.bannerId } });
  res.status(HTTP_STATUS.SUCCESS).send({ completed: true });
};
