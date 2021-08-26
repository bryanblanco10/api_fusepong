"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projectValidator = void 0;

var _expressValidator = require("express-validator");

const projectValidator = () => {
  return [(0, _expressValidator.body)("name").not().isEmpty().withMessage("name required"), (0, _expressValidator.body)("description").not().isEmpty().withMessage("description required"), (0, _expressValidator.body)("userUuid").not().isEmpty().withMessage("userUuid required")];
};

exports.projectValidator = projectValidator;