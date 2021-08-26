"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserHistoryRoutes = UserHistoryRoutes;

var _express = require("express");

var _middlewares = require("../middlewares");

var _validators = require("../middlewares/validators");

function UserHistoryRoutes({
  UserHistoryController
}) {
  const router = (0, _express.Router)();
  router.get("/user-history-project/:uuid", [_middlewares.authMiddleware], UserHistoryController.getUserHistoriesByProject.bind(UserHistoryController));
  router.get("/:uuid", [_middlewares.authMiddleware], UserHistoryController.getUserHistory.bind(UserHistoryController));
  router.post("/", (0, _validators.userHistoryValidator)(), [_middlewares.validatorMiddleware, _middlewares.authMiddleware], UserHistoryController.createUserHistory.bind(UserHistoryController));
  router.put("/:uuid", (0, _validators.userHistoryUpdateValidator)(), [_middlewares.validatorMiddleware, _middlewares.authMiddleware], UserHistoryController.updateUserHistory.bind(UserHistoryController));
  router.delete("/:uuid", [_middlewares.authMiddleware], UserHistoryController.deleteUserHistory.bind(UserHistoryController));
  return router;
}