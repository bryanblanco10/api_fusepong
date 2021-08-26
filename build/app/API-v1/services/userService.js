"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserService = void 0;

var _baseService = require("./baseService");

class UserService extends _baseService.BaseService {
  constructor({
    UserRepository
  }) {
    super(UserRepository);
    this._userRepository = UserRepository;
  }

  async getUserByUuid(uuid) {
    return this._userRepository.getUserByUuid(uuid);
  }

}

exports.UserService = UserService;