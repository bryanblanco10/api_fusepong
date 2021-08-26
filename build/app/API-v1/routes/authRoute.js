"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthRoutes = AuthRoutes;

var _express = require("express");

var _middlewares = require("../middlewares");

var _validators = require("../middlewares/validators");

function AuthRoutes({
  AuthController
}) {
  const router = (0, _express.Router)();
  router.post("/register", (0, _validators.registerValidator)(), [_middlewares.validatorMiddleware], AuthController.register.bind(AuthController));
  router.post("/login", (0, _validators.loginValidator)(), [_middlewares.validatorMiddleware], AuthController.login.bind(AuthController));
  return router;
}