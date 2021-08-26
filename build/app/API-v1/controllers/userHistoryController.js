"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserHistoryController = void 0;

class UserHistoryController {
  constructor({
    UserHistoryService
  }) {
    this._userHistoryService = UserHistoryService;
  }

  async getUserHistoriesByProject(req, res) {
    const {
      uuid
    } = req.params;
    let userHistories = await this._userHistoryService.getUserHistoriesByProject(uuid);
    res.status(201).send(userHistories);
  }

  async getUserHistory(req, res) {
    const {
      uuid
    } = req.params;
    let userHistory = await this._userHistoryService.get(uuid);
    res.status(201).send(userHistory);
  }

  async createUserHistory(req, res) {
    const {
      body
    } = req;
    let userHistory = await this._userHistoryService.create({ ...body,
      status: "Activo"
    });
    res.status(201).send(userHistory);
  }

  async updateUserHistory(req, res) {
    const {
      uuid
    } = req.params;
    const {
      body
    } = req;
    await this._userHistoryService.update(uuid, body);
    res.status(201).send({
      message: "Updated userHistory"
    });
  }

  async deleteUserHistory(req, res) {
    const {
      uuid
    } = req.params;
    const {
      body
    } = req;
    await this._userHistoryService.delete(uuid, body);
    res.status(201).send({
      message: "Deleted userHistory"
    });
  }

}

exports.UserHistoryController = UserHistoryController;