import { Router } from "express";
import { authMiddleware, validatorMiddleware } from "../middlewares";
import { ticketValidator, ticketUpdateValidator } from "../middlewares/validators";

export function TicketRoutes({ TicketController }){
  const router = Router();

  router.get(
    "/ticket-user-history/:uuid",
    [authMiddleware],
    TicketController.getTicketsByUserHistory.bind(TicketController)
  )

  router.get(
    "/:uuid",
    [authMiddleware],
    TicketController.getTicket.bind(TicketController)
  )

  router.post(
    "/",
    ticketValidator(),
    [validatorMiddleware, authMiddleware],
    TicketController.createTicket.bind(TicketController)
  )

  router.put(
    "/:uuid",
    ticketUpdateValidator(),
    [validatorMiddleware, authMiddleware],
    TicketController.updateTicket.bind(TicketController)
  )

  router.delete(
    "/:uuid",
    [authMiddleware],
    TicketController.deleteTicket.bind(TicketController)
  )

  return router;
}