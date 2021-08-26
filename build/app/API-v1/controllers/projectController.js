"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectController = void 0;

class ProjectController {
  constructor({
    ProjectService
  }) {
    this._projectService = ProjectService;
  }

  async getProjects(req, res) {
    const {
      uuid
    } = req.params;
    let projects = await this._projectService.getProjects(uuid);
    res.status(201).send(projects);
  }

  async getProject(req, res) {
    const {
      uuid
    } = req.params;
    let project = await this._projectService.get(uuid);
    res.status(201).send(project);
  }

  async createProject(req, res) {
    const {
      body
    } = req;
    let project = await this._projectService.create({ ...body,
      status: "Activo"
    });
    res.status(201).send(project);
  }

  async updateProject(req, res) {
    const {
      uuid
    } = req.params;
    const {
      body
    } = req;
    await this._projectService.update(uuid, body);
    res.status(201).send({
      message: "Update project"
    });
  }

  async deleteProject(req, res) {
    const {
      uuid
    } = req.params;
    const {
      body
    } = req;
    await this._projectService.delete(uuid, body);
    res.status(201).send({
      message: "Deleted project"
    });
  }

}

exports.ProjectController = ProjectController;