"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enterpriseValidator = void 0;

var _expressValidator = require("express-validator");

const enterpriseValidator = () => {
  return [(0, _expressValidator.body)("name").not().isEmpty().withMessage("name required"), (0, _expressValidator.body)("nit").not().isEmpty().withMessage("nit required"), (0, _expressValidator.body)("email").not().isEmpty().withMessage("email required")];
};

exports.enterpriseValidator = enterpriseValidator;