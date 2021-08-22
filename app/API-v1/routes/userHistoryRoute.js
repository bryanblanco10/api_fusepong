import { Router } from "express";
import { authMiddleware, validatorMiddleware } from "../middlewares";
import { userHistoryValidator, userHistoryUpdateValidator } from "../middlewares/validators";

export function UserHistoryRoutes({ UserHistoryController }){
  const router = Router();

  router.get(
    "/user-history-project/:uuid",
    [authMiddleware],
    UserHistoryController.getUserHistoriesByProject.bind(UserHistoryController)
  )

  router.get(
    "/:uuid",
    [authMiddleware],
    UserHistoryController.getUserHistory.bind(UserHistoryController)
  )

  router.post(
    "/",
    userHistoryValidator(),
    [validatorMiddleware, authMiddleware],
    UserHistoryController.createUserHistory.bind(UserHistoryController)
  )

  router.put(
    "/:uuid",
    userHistoryUpdateValidator(),
    [validatorMiddleware, authMiddleware],
    UserHistoryController.updateUserHistory.bind(UserHistoryController)
  )

  router.delete(
    "/:uuid",
    [authMiddleware],
    UserHistoryController.deleteUserHistory.bind(UserHistoryController)
  )

  return router;
}
