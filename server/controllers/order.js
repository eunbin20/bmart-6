const Order = require('../models/order');
const Product = require('../models/product');
const OrderProductRelation = require('../models/order_product_relation');
const { HTTP_STATUS } = require('../utils/constants');

exports.create = async (req, res) => {
  console.log(req.body);
  const orderProducts = await Promise.all(
    req.body.products.map(async ({ id, quantity }) => {
      const product = await Product.findOne({ where: { id } });
      product.quantity -= quantity;
      if (product.quantity === 0) product.isSold = true;
      await product.save();
      const { title, price, discountedPrice } = product;
      return { id, quantity, title, price, discountedPrice };
    }),
  );

  const order = await Order.createOrder(orderProducts, req.user.id);
  console.log(order);
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
