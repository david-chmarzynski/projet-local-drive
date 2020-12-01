const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// DEFINING product SCHEMA
const productSchema = Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  unit: { type: String , required: true },
  stock: { type: Number , required: true },
  image: { type: String , required: true},
  shop_id: { type: Object , required: true},
  category_id: { type: Object , required: true},
  date_created: { type: Date , required: true},
  date_updated: { type: Date , required: false}
});

const Product = mongoose.model('products', productSchema);

module.exports = Product;