"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatorMiddleware = void 0;

var _expressValidator = require("express-validator");

const validatorMiddleware = (req, res, next) => {
  const errors = (0, _expressValidator.validationResult)(req);

  if (errors.isEmpty()) {
    return next();
  }

  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({
    [err.param]: err.msg
  }));
  return res.status(422).json({
    errors: extractedErrors
  });
};

exports.validatorMiddleware = validatorMiddleware;