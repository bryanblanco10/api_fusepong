"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterpriseRepository = void 0;

var _baseRepository = require("./baseRepository");

class EnterpriseRepository extends _baseRepository.BaseRepository {
  constructor({
    db
  }) {
    super(db, "Enterprise");
    this._db = db;
  }

  getEnterpriseByNit(nit) {
    return this._db.Enterprise.findOne({
      where: {
        nit
      }
    });
  }

  getEnterpriseByEmail(email) {
    return this._db.Enterprise.findOne({
      where: {
        email
      }
    });
  }

}

exports.EnterpriseRepository = EnterpriseRepository;