"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterpriseService = void 0;

var _baseService = require("./baseService");

var _helpers = require("../helpers");

class EnterpriseService extends _baseService.BaseService {
  constructor({
    EnterpriseRepository
  }) {
    super(EnterpriseRepository);
    this._enterpriseRepository = EnterpriseRepository;
  }

  async getEnterpriseByNit(nit) {
    return await this._enterpriseRepository.getEnterpriseByNit(nit);
  }

  async getEnterpriseByEmail(email) {
    return await this._enterpriseRepository.getEnterpriseByEmail(email);
  }

  async createEnterprise(enterprise) {
    const {
      nit,
      email
    } = enterprise;
    let hasEnterprise = await this.getEnterpriseByNit(nit);
    if (hasEnterprise) return this.reportError(_helpers.constants.REGISTER_NIT);
    hasEnterprise = await this.getEnterpriseByEmail(email);
    if (hasEnterprise) this.reportError(_helpers.constants.REGISTER);
    const createEnterprise = await this._enterpriseRepository.create(enterprise);
    return createEnterprise;
  }

  async updateEnterprise(uuid, enterprise) {
    const {
      nit,
      email
    } = enterprise;
    let hasEnterprise = await this.getEnterpriseByNit(nit);
    if (hasEnterprise && hasEnterprise.uuid !== uuid && hasEnterprise.nit == nit) return this.reportError(_helpers.constants.REGISTER_NIT);
    hasEnterprise = await this.getEnterpriseByEmail(email);
    if (hasEnterprise && hasEnterprise.uuid !== uuid && hasEnterprise.email == email) this.reportError(_helpers.constants.REGISTER);
    const updateEnterprise = await this._enterpriseRepository.update(uuid, enterprise);
    return updateEnterprise;
  }

  reportError(option) {
    switch (option) {
      case _helpers.constants.REGISTER:
        (0, _helpers.generateError)(_helpers.constants.STATUS_422, "Email ya encuentra registrado.");
        break;

      case _helpers.constants.REGISTER_NIT:
        (0, _helpers.generateError)(_helpers.constants.STATUS_422, "Nit ya encuentra registrado,");

      default:
        break;
    }

    throw error;
  }

}

exports.EnterpriseService = EnterpriseService;