"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectRepository = void 0;

var _baseRepository = require("./baseRepository");

class ProjectRepository extends _baseRepository.BaseRepository {
  constructor({
    db
  }) {
    super(db, "Project");
    this._db = db;
  }

  getProjects(uuid) {
    return this._db.Project.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deleteAt"]
      },
      where: {
        userUuid: uuid
      }
    });
  }

}

exports.ProjectRepository = ProjectRepository;
;