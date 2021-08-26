"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ticketUpdateValidator = void 0;

var _expressValidator = require("express-validator");

const ticketUpdateValidator = () => {
  return [(0, _expressValidator.body)("commentary").not().isEmpty().withMessage("commentary required"), (0, _expressValidator.body)("status").not().isEmpty().withMessage("status required")];
};

exports.ticketUpdateValidator = ticketUpdateValidator;