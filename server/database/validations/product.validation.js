const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const createProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  unit: Joi.number().required(),
  stock: Joi.number().required(),
  image: Joi.string().required(),
  shop_id: Joi.objectId().required(),
  category_id: Joi.number().required(),
  date_created: Joi.date(),
  date_updated: Joi.date()
});

const deleteProductSchema = Joi.object({
  productId: Joi.string().required()
});

module.exports = { createProductSchema, deleteProductSchema };