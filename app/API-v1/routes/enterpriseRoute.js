import { Router } from "express";
import { validatorMiddleware, authMiddleware } from "../middlewares";
import { enterpriseValidator } from "../middlewares/validators";

export function EnterpriseRoutes({ EnterpriseController }){
  
  const router = Router();

  router.get(
    "/",
    EnterpriseController.getEnterprises.bind(EnterpriseController)
  )

  router.get(
    "/:uuid",
    [authMiddleware],
    EnterpriseController.getEnterprise.bind(EnterpriseController)
  )

  router.post(
    "/",
    enterpriseValidator(),
    [validatorMiddleware, authMiddleware],
    EnterpriseController.createEnterprise.bind(EnterpriseController)
  )

  router.put(
    "/:uuid",
    enterpriseValidator(),
    [validatorMiddleware, authMiddleware],
    EnterpriseController.updateEnterprise.bind(EnterpriseController)
  )

  router.delete(
    "/:uuid",
    [authMiddleware],
    EnterpriseController.deleteEnterprise.bind(EnterpriseController)
  )

  return router;
}