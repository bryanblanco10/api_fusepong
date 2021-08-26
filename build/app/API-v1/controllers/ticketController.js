"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TicketController = void 0;

class TicketController {
  constructor({
    TicketService
  }) {
    this._ticketService = TicketService;
  }

  async getTicketsByUserHistory(req, res) {
    const {
      uuid
    } = req.params;
    let tickets = await this._ticketService.getTicketsByUserHistory(uuid);
    res.status(201).send(tickets);
  }

  async getTicket(req, res) {
    const {
      uuid
    } = req.params;
    let ticket = await this._ticketService.get(uuid);
    res.status(201).send(ticket);
  }

  async createTicket(req, res) {
    const {
      body
    } = req;
    let ticket = await this._ticketService.create({ ...body,
      status: "Activo"
    });
    res.status(201).send(ticket);
  }

  async updateTicket(req, res) {
    const {
      uuid
    } = req.params;
    const {
      body
    } = req;
    await this._ticketService.update(uuid, body);
    res.status(201).send({
      message: "Updated ticket"
    });
  }

  async deleteTicket(req, res) {
    const {
      uuid
    } = req.params;
    const {
      body
    } = req;
    await this._ticketService.delete(uuid, body);
    res.status(201).send({
      message: "Deleted ticket"
    });
  }

}

exports.TicketController = TicketController;