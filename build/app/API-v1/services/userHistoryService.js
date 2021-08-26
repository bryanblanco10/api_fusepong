"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserHistoryService = void 0;

var _baseService = require("./baseService");

class UserHistoryService extends _baseService.BaseService {
  constructor({
    UserHistoryRepository
  }) {
    super(UserHistoryRepository);
    this._userHistoryRepository = UserHistoryRepository;
  }

  async getUserHistoriesByProject(uuid) {
    return await this._userHistoryRepository.getUserHistoriesByProject(uuid);
  }

}

exports.UserHistoryService = UserHistoryService;