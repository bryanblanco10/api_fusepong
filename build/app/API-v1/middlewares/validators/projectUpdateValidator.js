"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.projectUpdateValidator = void 0;

var _expressValidator = require("express-validator");

const projectUpdateValidator = () => {
  return [(0, _expressValidator.body)("name").not().isEmpty().withMessage("name required"), (0, _expressValidator.body)("description").not().isEmpty().withMessage("description required"), (0, _expressValidator.body)("status").not().isEmpty().withMessage("status required")];
};

exports.projectUpdateValidator = projectUpdateValidator;