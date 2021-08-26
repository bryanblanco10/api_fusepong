"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EnterpriseController = void 0;

class EnterpriseController {
  constructor({
    EnterpriseService
  }) {
    this._enterpriseService = EnterpriseService;
  }

  async getEnterprises(req, res) {
    let enterprises = await this._enterpriseService.getAll();
    res.status(201).send(enterprises);
  }

  async getEnterprise(req, res) {
    const {
      uuid
    } = req.params;
    let enterprise = await this._enterpriseService.get(uuid);
    res.status(201).send(enterprise);
  }

  async createEnterprise(req, res) {
    const {
      body
    } = req;
    await this._enterpriseService.createEnterprise(body);
    res.status(201).send({
      message: "Created enterprise"
    });
  }

  async updateEnterprise(req, res) {
    const {
      uuid
    } = req.params;
    const {
      body
    } = req;
    await this._enterpriseService.updateEnterprise(uuid, body);
    res.status(201).send({
      message: "Updated enterprise"
    });
  }

  async deleteEnterprise(req, res) {
    const {
      uuid
    } = req.params;
    const {
      body
    } = req;
    await this._enterpriseService.delete(uuid, body);
    res.status(201).send({
      message: "Deleted enterprise"
    });
  }

}

exports.EnterpriseController = EnterpriseController;