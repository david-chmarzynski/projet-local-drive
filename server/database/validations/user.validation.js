const Joi = require('@hapi/joi');

const signupSchema = Joi.object({
  firstname: Joi.string(),
  lastname: Joi.string(),
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(3).required(),
  isShop: Joi.boolean().required(),
  location_id: Joi.isRef(),
  date_created: Joi.date(),
  date_updated: Joi.date()
});

const signinSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().required()
});

module.exports = {signupSchema, signinSchema};