// validations/menuItemValidation.js
const { body, validationResult } = require("express-validator");

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

    body('menuType')
      .notEmpty()
      .withMessage('Menu type is required')
      .isIn(['dinner', 'drinks', 'dessert'])
      .withMessage('Menu type must be one of: dinner, drinks, dessert'),

    body('course')
      .notEmpty()
      .withMessage('Course is required')
      .isString()
      .withMessage('Course must be a string')
      .custom((value, { req }) => {
        const coursesByMenu = {
          dinner: ["first", "chilled", "main"],
          drinks: ["beer", "wine", "cocktails", "zero-proof"],
          dessert: ["desserts", "digestifs", "coffee"]
        };
        if (!req.body.menuType) {
          throw new Error('Menu type must be validated first');
        }
        if (!coursesByMenu[req.body.menuType].includes(value)) {
          throw new Error(`Course must be one of the following: ${coursesByMenu[req.body.menuType].join(", ")}`);
        }
        return true;
      }),
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