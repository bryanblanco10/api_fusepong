import { body } from "express-validator";

const ticketUpdateValidator = () => {
  return [
    body("commentary").not().isEmpty().withMessage("commentary required"),
    body("status").not().isEmpty().withMessage("status required")
  ];
};

export { ticketUpdateValidator };