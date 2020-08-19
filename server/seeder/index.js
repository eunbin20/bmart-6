const fs = require('fs');
const Product = require('../models/product');
const Subcategory = require('../models/subcategory');
const Category = require('../models/category');

const readData = (file) => {
  return JSON.parse(fs.readFileSync(`${__dirname}/${file}`, { encoding: 'utf-8' }));
};
exports.seed = async () => {
  // create Categories
  const categoryData = readData('data/category.json');
  await Category.bulkCreate(categoryData);

  // create Subcategories
  const subcategoryData = readData('data/subcategory.json');
  await Subcategory.bulkCreate(subcategoryData);

  // create Products
  const productData = readData('data/product.json');
  await Product.bulkCreate(productData);
};

// rawData에서 product를 뽑아올때 사용하는 코드
// fs.readdirSync(`${__dirname}/raw_data`).forEach((file) => {
//   const subcategoryId = +file.split('.')[0];
//   const productData = readData(`/raw_data/${file}`);
//   const products = productData.products.map((product) => {
//     return {
//       subcategoryId,
//       title: product.name,
//       price: product.original_price,
//       discountedPrice: product.price,
//       discountedRate: 100 - Math.round((product.price / product.original_price) * 100),
//       quantity: product.totstock,
//       imageUrl: product.thumbnail_image_url,
//       isDiscounted: product.original_price !== product.price,
//       isSold: product.sold_out,
//     };
//   });
//   Product.bulkCreate(products);
// });
