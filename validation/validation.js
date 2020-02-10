import { check, validationResult, param } from 'express-validator';

const validate = {
  newTicket: [
    check('name')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .trim()
      .withMessage('name is required')
      .isLength({ min: 1, max: 100 })
      .withMessage('name must be between 1 to 100 charaters long'),
    (req, res, next) => {
      const errors = validationResult(req);
      const errorMessage = {};
      if (!errors.isEmpty()) {
        errors.array({ onlyFirstError: true }).forEach((error) => {
          errorMessage[error.param] = error.msg;
        });
        return res.status(400).json({
          errors: errorMessage,
        });
      }
      return next();
    },
  ],
  newComment: [
    check('name')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .trim()
      .withMessage('Name is required')
      .isLength({ min: 1, max: 100 })
      .withMessage('Name must be between 1 to 100 charaters long'),
    check('message')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Message cannot be empty'),
    (req, res, next) => {
      const errors = validationResult(req);
      const errorMessage = {};
      if (!errors.isEmpty()) {
        errors.array({ onlyFirstError: true }).forEach((error) => {
          errorMessage[error.param] = error.msg;
        });
        return res.status(400).json({
          errors: errorMessage,
        });
      }
      return next();
    },
  ],
  validateId: [
    param('id')
      .matches((/^[0-9a-f]{24}$/))
      .withMessage('id is not valid'),
    (req, res, next) => {
      const errors = validationResult(req);
      const errorMessage = {};
      if (!errors.isEmpty()) {
        errors.array({ onlyFirstError: true }).forEach((error) => {
          errorMessage[error.param] = error.msg;
        });
        return res.status(400).json({
          errors: errorMessage,
        });
      }
      return next();
    },
  ],
};
export default validate;