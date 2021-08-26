"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.notFoundMiddleware = void 0;

var _constants = _interopRequireDefault(require("../helpers/constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const notFoundMiddleware = (req, res, next) => {
  res.status(404).send({
    status: _constants.default.STATUS_400,
    message: _constants.default.ERROR_NOT_FOUND
  });
};

exports.notFoundMiddleware = notFoundMiddleware;