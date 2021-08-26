"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = generateToken;

var _jsonwebtoken = require("jsonwebtoken");

var _environments = require("../../../config/environments");

function generateToken(user) {
  return (0, _jsonwebtoken.sign)(user, _environments.currentEnv.SECRET, {
    expiresIn: "30d"
  });
}