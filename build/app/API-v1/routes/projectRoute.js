"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectRoutes = ProjectRoutes;

var _express = require("express");

var _middlewares = require("../middlewares");

var _validators = require("../middlewares/validators");

function ProjectRoutes({
  ProjectController
}) {
  const router = (0, _express.Router)();
  router.get("/project-user/:uuid", [_middlewares.authMiddleware], ProjectController.getProjects.bind(ProjectController));
  router.get("/:uuid", [_middlewares.authMiddleware], ProjectController.getProject.bind(ProjectController));
  router.post("/", (0, _validators.projectValidator)(), [_middlewares.validatorMiddleware, _middlewares.authMiddleware], ProjectController.createProject.bind(ProjectController));
  router.put("/:uuid", (0, _validators.projectUpdateValidator)(), [_middlewares.validatorMiddleware, _middlewares.authMiddleware], ProjectController.updateProject.bind(ProjectController));
  router.delete("/:uuid", [_middlewares.authMiddleware], ProjectController.deleteProject.bind(ProjectController));
  return router;
}