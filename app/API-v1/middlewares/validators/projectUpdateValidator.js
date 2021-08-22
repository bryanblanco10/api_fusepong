import { body } from "express-validator";

const projectUpdateValidator = () => {
  return [
    body("name").not().isEmpty().withMessage("name required"),
    body("description").not().isEmpty().withMessage("description required"),
    body("status").not().isEmpty().withMessage("status required")
  ];
};

export { projectUpdateValidator };