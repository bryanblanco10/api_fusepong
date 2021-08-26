"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TicketRepository = void 0;

var _baseRepository = require("./baseRepository");

class TicketRepository extends _baseRepository.BaseRepository {
  constructor({
    db
  }) {
    super(db, "Ticket");
    this._db = db;
  }

  getTicketsByUserHistory(uuid) {
    return this._db.Ticket.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deleteAt"]
      },
      where: {
        userHistoryUuid: uuid
      }
    });
  }

}

exports.TicketRepository = TicketRepository;