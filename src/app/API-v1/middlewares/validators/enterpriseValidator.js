import { body } from "express-validator";

const enterpriseValidator = () => {
  return [
    body("name").not().isEmpty().withMessage("name required"),
    body("nit").not().isEmpty().withMessage("nit required"),
    body("email").not().isEmpty().withMessage("email required")
  ];
};

export { enterpriseValidator };