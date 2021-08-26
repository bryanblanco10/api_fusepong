"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Routes = Routes;

var _express = require("express");

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _compression = _interopRequireDefault(require("compression"));

var _helmet = _interopRequireDefault(require("helmet"));

require("express-async-errors");

var _middlewares = require("../middlewares");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Routes({
  AuthRoutes,
  ProjectRoutes,
  UserHistoryRoutes,
  TicketRoutes,
  EnterpriseRoutes
}) {
  const router = (0, _express.Router)();
  const apiRouter = (0, _express.Router)();
  /* Middlewares */

  apiRouter.use((0, _morgan.default)("dev")).use((0, _cors.default)()).use((0, _helmet.default)()).use((0, _compression.default)()).use(_bodyParser.default.urlencoded({
    extended: false
  })).use(_bodyParser.default.json());
  apiRouter.use("/auth", AuthRoutes);
  apiRouter.use("/project", ProjectRoutes);
  apiRouter.use("/userHistory", UserHistoryRoutes);
  apiRouter.use("/ticket", TicketRoutes);
  apiRouter.use("/enterprise", EnterpriseRoutes);
  router.use("/api/v1", apiRouter);
  router.use(_middlewares.notFoundMiddleware);
  router.use(_middlewares.errorMiddleware);
  return router;
}