"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userValidator = void 0;

var _expressValidator = require("express-validator");

const userValidator = () => {
  return [(0, _expressValidator.body)("names").not().isEmpty().withMessage("names required"), (0, _expressValidator.body)("last_names").not().isEmpty().withMessage("last_names required"), (0, _expressValidator.body)("email").isEmail().withMessage("email invalido"), (0, _expressValidator.body)("profileId").not().isEmpty().withMessage("profileId required")];
};

exports.userValidator = userValidator;