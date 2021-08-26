"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerValidator = void 0;

var _expressValidator = require("express-validator");

const registerValidator = () => {
  return [(0, _expressValidator.body)("names").not().isEmpty().withMessage("names required"), (0, _expressValidator.body)("email").isEmail().withMessage("email invalido"), (0, _expressValidator.body)("password").not().isEmpty().withMessage("password required"), (0, _expressValidator.body)("enterpriseUuid").not().isEmpty().withMessage("enterpriseUuid required")];
};

exports.registerValidator = registerValidator;