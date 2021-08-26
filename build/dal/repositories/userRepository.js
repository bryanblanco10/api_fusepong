"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserRepository = void 0;

var _baseRepository = require("./baseRepository");

class UserRepository extends _baseRepository.BaseRepository {
  constructor({
    db
  }) {
    super(db, "User");
    this._db = db;
  }

  getUserByEmail(email) {
    return this._db.User.findOne({
      where: {
        email
      }
    });
  }

  getUserByUuid(uuid) {
    return this._db.User.findOne({
      where: {
        uuid
      }
    });
  }

}

exports.UserRepository = UserRepository;