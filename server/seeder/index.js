const fs = require('fs');
const Product = require('../models/product');
const Subcategory = require('../models/subcategory');
const Category = require('../models/category');

const readData = (file) => {
  return JSON.parse(fs.readFileSync(`${__dirname}/${file}`, { encoding: 'utf-8' }));
};
exports.seed = async () => {
  // create Categories
  const categoryData = readData('categoryData.json');
  await Category.bulkCreate(categoryData);

  // create Subcategories
  const subcategoryData = readData('subcategoryData.json');
  await Subcategory.bulkCreate(subcategoryData);

  // create Products
  fs.readdirSync(`${__dirname}/productData`).forEach((file) => {
    const subcategoryId = +file.split('.')[0];
    const productData = readData(`/productData/${file}`);
    const products = productData.products.map((product) => {
      return {
        subcategoryId,
        title: product.name,
        price: product.original_price,
        discountedPrice: product.price,
        quantity: product.totstock,
        imageUrl: product.thumbnail_image_url,
        isDiscounted: product.original_price !== product.price,
        isSold: product.sold_out,
      };
    });
    Product.bulkCreate(products);
  });
};
