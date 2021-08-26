import { BaseRepository } from "./baseRepository";

export class EnterpriseRepository extends BaseRepository {
  constructor({ db }){
    super(db, "Enterprise");
    this._db = db;
  }

  getEnterpriseByNit(nit){
    return this._db.Enterprise.findOne({ where: { nit }});
  }

  getEnterpriseByEmail(email){  
    return this._db.Enterprise.findOne({ where: { email }});
  }
}