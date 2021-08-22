import { body } from "express-validator";

const userHistoryUpdateValidator = () => {
  return [
    body("description").not().isEmpty().withMessage("description required")
  ];
};

export { userHistoryUpdateValidator };