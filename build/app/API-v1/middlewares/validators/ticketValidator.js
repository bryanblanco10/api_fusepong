"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ticketValidator = void 0;

var _expressValidator = require("express-validator");

const ticketValidator = () => {
  return [(0, _expressValidator.body)("commentary").not().isEmpty().withMessage("commentary required"), (0, _expressValidator.body)("userHistoryUuid").not().isEmpty().withMessage("userHistoryUuid required")];
};

exports.ticketValidator = ticketValidator;