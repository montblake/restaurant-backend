// validations/menuItemValidation.js
const { body, validationResult } = require("express-validator");

const menuItemValidationRules = () => {
  return [
    body('name').isString().withMessage('Name must be a string'),
    body('description').isString().withMessage('Description must be a string'),
    body('price').isNumeric().withMessage('Price must be a number'),
    body('menu').isIn(['dinner', 'drinks', 'dessert']).withMessage('Menu must be one of: dinner, drinks, dessert'),
    body('course').isString().withMessage('Course must be a string'),
    body('course').custom((value, { req }) => {
      const coursesByMenu = {
        dinner: ["first", "chilled", "main"],
        drinks: ["beer","wine","cocktails", "zero-proof"],
        dessert: ["desserts", "digestifs", "coffee"]
      };
      // make sure the menu field is validated before the course field
      if (!req.body.menu) {
        throw new Error('Menu field must be validated first');
      }
      if (!coursesByMenu[req.body.menu].includes(value)) {
        throw new Error(`Course must be one of the following: ${coursesByMenu[req.body.menu].join(", ")}`);
      }
      return true;
    }),
    body('current').isBoolean().withMessage('Current must be a boolean'),
    body('ingredients').isString().withMessage('Ingredients must be a string'),
    body('method').isString().withMessage('Method must be a string'),
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));
  return res.status(422).json({ errors: extractedErrors });
}

module.exports = {
  menuItemValidationRules,
  validate
}