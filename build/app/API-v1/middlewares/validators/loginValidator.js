"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginValidator = void 0;

var _expressValidator = require("express-validator");

const loginValidator = () => {
  return [(0, _expressValidator.body)('email').isEmail().withMessage('Invalid email!'), (0, _expressValidator.body)('password').not().isEmpty().withMessage('password required!')];
};

exports.loginValidator = loginValidator;