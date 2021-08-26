import { BaseRepository } from "./baseRepository";

export class TicketRepository extends BaseRepository {
  constructor({ db }){
    super(db, "Ticket");
    this._db = db;
  }

  getTicketsByUserHistory(uuid){
    return this._db.Ticket.findAll({
      attributes: { exclude: ["createdAt", "updatedAt", "deleteAt"] }, 
      where: { userHistoryUuid: uuid }
    })
  }
}
