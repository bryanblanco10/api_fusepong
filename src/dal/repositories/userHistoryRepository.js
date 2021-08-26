import { BaseRepository } from "./baseRepository";

export class UserHistoryRepository extends BaseRepository {
  constructor({ db }){
    super(db, "UserHistory");
    this._db = db;
  }

  getUserHistoriesByProject(uuid){
    return this._db.UserHistory.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "deleteAt"] }, 
      where: { projectUuid: uuid }
    })
  }
}