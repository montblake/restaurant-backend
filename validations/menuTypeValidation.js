// validations/menuTypeValidation.js
const { body, validationResult } = require("express-validator");

const menuTypeValidationRules = () => {
  return [
    body('name')
      .notEmpty()
      .withMessage('Name is required')
      .isString()
      .withMessage('Name must be a string'),

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
  menuTypeValidationRules,
  validate
};