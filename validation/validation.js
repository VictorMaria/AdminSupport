import { check, param } from 'express-validator';

const validate = {
  newTicket: [
    check('name')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .trim()
      .withMessage('name is required')
      .isLength({ min: 1, max: 100 })
      .withMessage('name must be between 1 to 100 charaters long'),
    check('description')
      .not()
      .isEmpty({ ignore_whitespace: true })
      .withMessage('Description is required'),  
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
  ],
  validateId: [
    param('id')
      .matches((/^[0-9a-f]{24}$/))
      .withMessage('id is not valid'),
  ],
};
export default validate;