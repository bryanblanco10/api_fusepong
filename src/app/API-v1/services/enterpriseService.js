import { BaseService } from "./baseService";
import { generateError, constants } from "../helpers";

export class EnterpriseService extends BaseService {
  constructor({ EnterpriseRepository }) {
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
    const { nit, email } = enterprise;

    let hasEnterprise = await this.getEnterpriseByNit(nit);

    if (hasEnterprise) return this.reportError(constants.REGISTER_NIT);

    hasEnterprise = await this.getEnterpriseByEmail(email);

    if (hasEnterprise) this.reportError(constants.REGISTER);

    const createEnterprise = await this._enterpriseRepository.create(enterprise);

    return createEnterprise;
  }

  async updateEnterprise(uuid, enterprise) {
    const { nit, email } = enterprise;

    let hasEnterprise = await this.getEnterpriseByNit(nit);

    if (
      hasEnterprise &&
      hasEnterprise.uuid !== uuid &&
      hasEnterprise.nit == nit
    )
      return this.reportError(constants.REGISTER_NIT);

    hasEnterprise = await this.getEnterpriseByEmail(email);

    if (
      hasEnterprise &&
      hasEnterprise.uuid !== uuid &&
      hasEnterprise.email == email
    )
      this.reportError(constants.REGISTER);

    const updateEnterprise = await this._enterpriseRepository.update(uuid, enterprise);

    return updateEnterprise;
  }

  reportError(option) {
    switch (option) {
      case constants.REGISTER:
        generateError(constants.STATUS_422, "Email ya encuentra registrado.");
        break;
      case constants.REGISTER_NIT:
        generateError(constants.STATUS_422, "Nit ya encuentra registrado,");
      default:
        break;
    }
    throw error;
  }
}
