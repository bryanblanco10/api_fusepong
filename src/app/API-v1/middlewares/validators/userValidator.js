import { body } from "express-validator";

const userValidator = () => {
  return [
    body("names").not().isEmpty().withMessage("names required"),
    body("last_names").not().isEmpty().withMessage("last_names required"),
    body("email").isEmail().withMessage("email invalido"),
    body("profileId").not().isEmpty().withMessage("profileId required")
  ];
};

export { userValidator };