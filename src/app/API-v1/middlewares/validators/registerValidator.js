import { body } from "express-validator";

const registerValidator = () => {
  return [
    body("names").not().isEmpty().withMessage("names required"),
    body("email").isEmail().withMessage("email invalido"),
    body("password").not().isEmpty().withMessage("password required"),
    body("enterpriseUuid").not().isEmpty().withMessage("enterpriseUuid required")
  ];
};

export { registerValidator };