// validations/courseValidation.js
const MenuType = require("../models/menuType");
const { body, validationResult } = require("express-validator");

const courseValidationRules = () => {
  return [
    body('name')
      .notEmpty()
      .withMessage('Name is required')
      .isString()
      .withMessage('Name must be a string'),

    body('menuType')
      .notEmpty()
      .withMessage('Menu type is required')
      .isString()
      .withMessage('Menu type must be a string')
      .exists()
      .custom(async (value) => {
        const menuType = await MenuType.findById(value);
        if (!menuType) {
          return Promise.reject('MenuType does not exist');
        }
      }),

    body('position')
    .optional()
    .isInt()
    .withMessage('Position must be an integer'),

    body('current')
      .notEmpty()
      .withMessage('Current is required')
      .isBoolean()
      .withMessage('Current must be a boolean'),
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
  courseValidationRules,
  validate
};