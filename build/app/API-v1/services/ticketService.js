"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TicketService = void 0;

var _baseService = require("./baseService");

class TicketService extends _baseService.BaseService {
  constructor({
    TicketRepository
  }) {
    super(TicketRepository);
    this._ticketRepository = TicketRepository;
  }

  async getTicketsByUserHistory(uuid) {
    return await this._ticketRepository.getTicketsByUserHistory(uuid);
  }

}

exports.TicketService = TicketService;