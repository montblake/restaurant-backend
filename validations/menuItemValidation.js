// validations/menuItemValidation.js
const { body, validationResult } = require("express-validator");
const Course = require("../models/course");

const menuItemValidationRules = () => {
  return [
    body('name')
      .notEmpty()
      .withMessage('Name is required')
      .isString()
      .withMessage('Name must be a string'),

    body('description')
      .notEmpty()
      .withMessage('Description is required')
      .isString()
      .withMessage('Description must be a string'),

    body('price')
      .notEmpty()
      .withMessage('Price is required')
      .isNumeric()
      .withMessage('Price must be a number'),
    
    body('current')
      .notEmpty()
      .withMessage('Current is required')
      .isBoolean()
      .withMessage('Current must be a boolean'),

    body('ingredients')
      .notEmpty()
      .withMessage('Ingredients are required')
      .isString()
      .withMessage('Ingredients must be a string'),

    body('method')
      .notEmpty()
      .withMessage('Method is required')
      .isString()
      .withMessage('Method must be a string'),

    body('course')
    .notEmpty()
    .withMessage('Course is required')
    .isString()
    .withMessage('Course must be a string')
    .exists()
    .custom(async (value) => {
      const course = await Course.findById(value);
      if (!course) {
        return Promise.reject('Course does not exist');
      }
    }),

    body('position')
    .optional()
    .isInt()
    .withMessage('Position must be an integer'),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = errors.array().map(err => ({ [err.param]: err.msg }));
  return res.status(422).json({ errors: extractedErrors });
};

module.exports = {
  menuItemValidationRules,
  validate
};