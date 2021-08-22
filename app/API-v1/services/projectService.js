import { BaseService } from "./baseService";
import { generateError, constants } from "../helpers";

export class ProjectService extends BaseService {
  constructor({ ProjectRepository, UserRepository }){
    super(ProjectRepository);
    this._projectRepository = ProjectRepository;
    this._userService = UserRepository;
  }

  async getUserByUuid(uuid){
    return this._userService.getUserByUuid(uuid);
  }

  async getProjects(uuid){
    const hasUser = this.getUserByUuid(uuid);

    if(!hasUser) this.reportError(constants.ERROR_USER);

    const projects = await this._projectRepository.getProjects(uuid);

    return projects;
  }

  reportError(option) {
    switch (option) {
      case constants.ERROR_USER:
        generateError(constants.STATUS_422, constants.ERROR_USER);
      default:
        break;
    }
    throw error;
  }
}
