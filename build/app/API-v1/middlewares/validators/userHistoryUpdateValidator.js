"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userHistoryUpdateValidator = void 0;

var _expressValidator = require("express-validator");

const userHistoryUpdateValidator = () => {
  return [(0, _expressValidator.body)("description").not().isEmpty().withMessage("description required")];
};

exports.userHistoryUpdateValidator = userHistoryUpdateValidator;