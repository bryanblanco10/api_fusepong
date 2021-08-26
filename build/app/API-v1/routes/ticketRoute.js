"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TicketRoutes = TicketRoutes;

var _express = require("express");

var _middlewares = require("../middlewares");

var _validators = require("../middlewares/validators");

function TicketRoutes({
  TicketController
}) {
  const router = (0, _express.Router)();
  router.get("/ticket-user-history/:uuid", [_middlewares.authMiddleware], TicketController.getTicketsByUserHistory.bind(TicketController));
  router.get("/:uuid", [_middlewares.authMiddleware], TicketController.getTicket.bind(TicketController));
  router.post("/", (0, _validators.ticketValidator)(), [_middlewares.validatorMiddleware, _middlewares.authMiddleware], TicketController.createTicket.bind(TicketController));
  router.put("/:uuid", (0, _validators.ticketUpdateValidator)(), [_middlewares.validatorMiddleware, _middlewares.authMiddleware], TicketController.updateTicket.bind(TicketController));
  router.delete("/:uuid", [_middlewares.authMiddleware], TicketController.deleteTicket.bind(TicketController));
  return router;
}