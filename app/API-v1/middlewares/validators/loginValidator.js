import { body } from "express-validator";

const loginValidator = () => {
  return [
    body('email').isEmail().withMessage('Invalid email!'),
    body('password')
      .not()
      .isEmpty()
      .withMessage('password required!'),
  ];
};

export { loginValidator };