"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterpriseRoutes = EnterpriseRoutes;

var _express = require("express");

var _middlewares = require("../middlewares");

var _validators = require("../middlewares/validators");

function EnterpriseRoutes({
  EnterpriseController
}) {
  const router = (0, _express.Router)();
  router.get("/", EnterpriseController.getEnterprises.bind(EnterpriseController));
  router.get("/:uuid", [_middlewares.authMiddleware], EnterpriseController.getEnterprise.bind(EnterpriseController));
  router.post("/", (0, _validators.enterpriseValidator)(), [_middlewares.validatorMiddleware, _middlewares.authMiddleware], EnterpriseController.createEnterprise.bind(EnterpriseController));
  router.put("/:uuid", (0, _validators.enterpriseValidator)(), [_middlewares.validatorMiddleware, _middlewares.authMiddleware], EnterpriseController.updateEnterprise.bind(EnterpriseController));
  router.delete("/:uuid", [_middlewares.authMiddleware], EnterpriseController.deleteEnterprise.bind(EnterpriseController));
  return router;
}