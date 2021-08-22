import { body } from "express-validator";

const userHistoryValidator = () => {
  return [
    body("description").not().isEmpty().withMessage("description required"),
    body("projectUuid").not().isEmpty().withMessage("projectUuid required")
  ];
};

export { userHistoryValidator };