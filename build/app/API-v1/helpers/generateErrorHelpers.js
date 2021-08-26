"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateError = generateError;

function generateError(status, message) {
  const error = new Error();
  error.status = status;
  error.message = message;
  throw error;
}

;