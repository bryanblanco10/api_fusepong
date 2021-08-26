"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userHistoryValidator = void 0;

var _expressValidator = require("express-validator");

const userHistoryValidator = () => {
  return [(0, _expressValidator.body)("description").not().isEmpty().withMessage("description required"), (0, _expressValidator.body)("projectUuid").not().isEmpty().withMessage("projectUuid required")];
};

exports.userHistoryValidator = userHistoryValidator;