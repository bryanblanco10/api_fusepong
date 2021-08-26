"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseRepository = void 0;

class BaseRepository {
  constructor(db, entity) {
    this._db = db;
    this._entity = entity;
  }

  getAll() {
    return this._db[this._entity].findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deleteAt"]
      },
      where: {
        deleteAt: null
      }
    });
  }

  get(uuid) {
    return this._db[this._entity].findOne({
      attributes: {
        exclude: ["createdAt", "updatedAt", "deleteAt"]
      },
      where: {
        uuid
      }
    });
  }

  create(data) {
    return this._db[this._entity].create(data);
  }

  update(uuid, data) {
    delete data.createdAt;
    delete data.updatedAt;
    return this._db[this._entity].update(data, {
      where: {
        uuid
      }
    });
  }

  delete(uuid) {
    return this._db[this._entity].delete({
      where: {
        uuid
      }
    });
  }

}

exports.BaseRepository = BaseRepository;