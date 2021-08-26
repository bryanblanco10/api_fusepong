"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authMiddleware = authMiddleware;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _environments = require("../../../config/environments");

var _constants = _interopRequireDefault(require("../helpers/constants"));

var _generateErrorHelpers = require("../helpers/generateErrorHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function authMiddleware(req, res, next) {
  const token = req.header("Authorization");

  if (!token) {
    (0, _generateErrorHelpers.generateError)(_constants.default.STATUS_401, _constants.default.ERROR_AUTH_PUBLIC_KEY);
  }

  _jsonwebtoken.default.verify(token, _environments.currentEnv.SECRET, (error, decodedToken) => {
    if (error) {
      (0, _generateErrorHelpers.generateError)(_constants.default.STATUS_419, _constants.default.ERROR_AUTH_TOKEN);
    }

    req.user = decodedToken.user;
    next();
  });
}

;