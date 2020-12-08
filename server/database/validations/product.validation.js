const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

const createProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().required(),
  unit: Joi.number().required(),
  stock: Joi.number().required(),
  image: Joi.string().required(),
  shop_id: Joi.string(),
  category_id: Joi.number().required(),
  date_created: Joi.date(),
  date_updated: Joi.date()
});

const updateProductSchema = Joi.object({
  name: Joi.string(),
  description: Joi.string(),
  price: Joi.number(),
  unit: Joi.number(),
  stock: Joi.number(),
  image: Joi.string(),
  shop_id: Joi.string(),
  category_id: Joi.number()
});

module.exports = { createProductSchema, updateProductSchema };