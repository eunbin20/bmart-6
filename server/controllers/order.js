const Order = require('../models/order');
const Product = require('../models/product');
const { sequelize } = require('../models');

exports.create = async (req, res) => {
  const {
    user,
    body: { productIds },
  } = req;
  const t = await Order.beginTransaction();
  const products = await Product.findAll({ where: { id: productIds } }, { transaction: t });
  // bulk insert

  // productIds 로 product 다 가져오고? totalPrice, totalDiscountedPrice 값 구하고
  // order 테이블에 insert
  // orderProductRelation에 insert
  t.commit();
  res.status(200).send(products);
};
