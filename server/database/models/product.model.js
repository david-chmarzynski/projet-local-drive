const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// DEFINING product SCHEMA
const productSchema = Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  unit: { type: Number , required: true },
  stock: { type: Number , required: true },
  image: { type: String , required: true},
  shop_id: { type: String , required: true},
  category_id: { type: Number , required: true},
  date_created: { type: Date , required: true},
  date_updated: { type: Date , required: false}
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;