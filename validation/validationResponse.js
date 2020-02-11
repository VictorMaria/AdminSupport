import { validationResult } from 'express-validator';

const validationResponse = (req, res, next) => {
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
  };

export default validationResponse;