"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectService = void 0;

var _baseService = require("./baseService");

var _helpers = require("../helpers");

class ProjectService extends _baseService.BaseService {
  constructor({
    ProjectRepository,
    UserRepository
  }) {
    super(ProjectRepository);
    this._projectRepository = ProjectRepository;
    this._userService = UserRepository;
  }

  async getUserByUuid(uuid) {
    return this._userService.getUserByUuid(uuid);
  }

  async getProjects(uuid) {
    const hasUser = this.getUserByUuid(uuid);
    if (!hasUser) this.reportError(_helpers.constants.ERROR_USER);
    const projects = await this._projectRepository.getProjects(uuid);
    return projects;
  }

  reportError(option) {
    switch (option) {
      case _helpers.constants.ERROR_USER:
        (0, _helpers.generateError)(_helpers.constants.STATUS_422, _helpers.constants.ERROR_USER);

      default:
        break;
    }

    throw error;
  }

}

exports.ProjectService = ProjectService;