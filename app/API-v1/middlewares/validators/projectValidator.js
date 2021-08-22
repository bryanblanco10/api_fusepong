import { body } from "express-validator";

const projectValidator = () => {
  return [
    body("name").not().isEmpty().withMessage("name required"),
    body("description").not().isEmpty().withMessage("description required"),
    body("userUuid").not().isEmpty().withMessage("userUuid required")
  ];
};

export { projectValidator };