import { Router } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import compression from "compression";
import helmet from "helmet";
import "express-async-errors";
import { errorMiddleware, notFoundMiddleware } from "../middlewares";

export function Routes({
  AuthRoutes,
  ProjectRoutes,
  UserHistoryRoutes,
  TicketRoutes,
  EnterpriseRoutes
}) {
  const router = Router();
  const apiRouter = Router();

  /* Middlewares */
  apiRouter
    .use(morgan("dev"))
    .use(cors())
    .use(helmet())
    .use(compression())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json());

  apiRouter.use("/auth", AuthRoutes);
  apiRouter.use("/project", ProjectRoutes);
  apiRouter.use("/userHistory", UserHistoryRoutes);
  apiRouter.use("/ticket", TicketRoutes);
  apiRouter.use("/enterprise", EnterpriseRoutes);
  router.use("/api/v1", apiRouter);

  router.use(notFoundMiddleware);
  router.use(errorMiddleware);

  return router;
}
