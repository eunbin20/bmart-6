const Order = require('../models/order');
const Product = require('../models/product');
const OrderProductRelation = require('../models/order_product_relation');
const { HTTP_STATUS } = require('../utils/constants');

exports.create = async (req, res) => {
  const products = await Product.findAll({ where: { id: req.body.productIds } });
  const order = await Order.createOrder(products, req.user.id);
  res.status(HTTP_STATUS.CREATE_SUCCESS).send(order);
};

exports.findAll = async (req, res) => {
  const { user } = req;
  const orders = await Order.findAll({ where: { userId: user.id } });
  res.status(HTTP_STATUS.SUCCESS).send(orders);
};

exports.findOne = async (req, res) => {
  const { orderId } = req.params;
  const products = await OrderProductRelation.findAll({ where: { orderId } });
  res.status(HTTP_STATUS.SUCCESS).send(products);
};
