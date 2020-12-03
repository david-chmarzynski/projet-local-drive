const Product = require('../database/models/product.model');

exports.createProduct = async (body, user) => {
  // DEBUG
  // console.log("body :", body);
  try {
    const newProduct = new Product({
      name: body.name,
      description: body.description,
      price: body.price,
      unit: body.unit,
      stock: body.stock,
      image: body.image,
      shop_id: user._id,
      category_id: body.category_id,
      date_created: Date.now()
    })
    return newProduct.save();
  } catch (error) {
    console.log(error);
  }
};

exports.getProductsFromShop = async (user) => {
  return await Product.find({ shop_id: user }).exec();
};