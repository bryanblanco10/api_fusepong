"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthController = void 0;

class AuthController {
  constructor({
    AuthService
  }) {
    this._authService = AuthService;
  }

  async register(req, res) {
    const {
      body
    } = req;
    const user = await this._authService.register(body);
    res.status(201).send(user);
  }

  async login(req, res) {
    const {
      body
    } = req;
    const user = await this._authService.login(body);
    res.status(201).send(user);
  }

}

exports.AuthController = AuthController;