import { BaseRepository } from "./baseRepository";

export class ProjectRepository extends BaseRepository {
  constructor({ db }){
    super(db, "Project");
    this._db = db;
  }

  getProjects(uuid) {
    return this._db.Project.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "deleteAt"] }, 
      where: { userUuid: uuid }
    });
  }
};