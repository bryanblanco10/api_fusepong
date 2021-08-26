"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserHistoryRepository = void 0;

var _baseRepository = require("./baseRepository");

class UserHistoryRepository extends _baseRepository.BaseRepository {
  constructor({
    db
  }) {
    super(db, "UserHistory");
    this._db = db;
  }

  getUserHistoriesByProject(uuid) {
    return this._db.UserHistory.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deleteAt"]
      },
      where: {
        projectUuid: uuid
      }
    });
  }

}

exports.UserHistoryRepository = UserHistoryRepository;