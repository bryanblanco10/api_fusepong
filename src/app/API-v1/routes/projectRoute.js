import { Router } from "express";
import { authMiddleware, validatorMiddleware } from "../middlewares";
import { projectValidator, projectUpdateValidator } from "../middlewares/validators";


export function ProjectRoutes({ ProjectController }) {

  const router = Router();

  router.get(
    "/project-user/:uuid",
    [authMiddleware],
    ProjectController.getProjects.bind(ProjectController)
  )

  router.get(
    "/:uuid",
    [authMiddleware],
    ProjectController.getProject.bind(ProjectController)
  )

  router.post(
    "/",
    projectValidator(),
    [validatorMiddleware, authMiddleware],
    ProjectController.createProject.bind(ProjectController)
  )

  router.put(
    "/:uuid",
    projectUpdateValidator(),
    [validatorMiddleware, authMiddleware],
    ProjectController.updateProject.bind(ProjectController)
  )

  router.delete(
    "/:uuid",
    [authMiddleware],
    ProjectController.deleteProject.bind(ProjectController)
  )

  return router;
}
