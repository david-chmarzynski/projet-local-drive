const Product = require('../database/models/product.model');

// CREATE A NEW PRODUCT
exports.createNewProduct = async (body, user) => {
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

// FIND AND UPDATE PRODUCT
exports.updateNewProduct = (body) => {
  return Product.findByIdAndUpdate(body._id, {
    name: body.name,
    description: body.description,
    price: body.price,
    unit: body.unit,
    stock: body.stock,
    image: body.image,
    category_id: body.category_id,
    date_updated: Date.now()
  }).exec();
};

// FIND PRODUCT(S) WITH SHOP_ID
exports.getProductsFromShop = (user) => {
  return Product.find({ shop_id: user }).exec();
};

exports.findProductById = (id) => {
  return Product.findById(id).exec();
}

// FIND ONE PRODUCT BY ID AND DELETE
exports.deleteProductFromId = (id) => {
  return Product.findByIdAndDelete(id).exec();
};