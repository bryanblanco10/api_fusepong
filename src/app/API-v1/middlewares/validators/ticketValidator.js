import { body } from "express-validator";

const ticketValidator = () => {
  return [
    body("commentary").not().isEmpty().withMessage("commentary required"),
    body("userHistoryUuid").not().isEmpty().withMessage("userHistoryUuid required")
  ];
};

export { ticketValidator };