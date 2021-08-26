import { BaseRepository } from "./baseRepository";

export class UserRepository extends BaseRepository {
    constructor({ db }) {
        super(db, "User");
        this._db = db;
    }

    getUserByEmail(email) {
        return this._db.User.findOne({ where: { email }});
    }

    getUserByUuid(uuid) {
        return this._db.User.findOne({ where: { uuid }});
    }
}