"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthService = void 0;

var _bcryptjs = require("bcryptjs");

var _helpers = require("../helpers");

class AuthService {
  constructor({
    UserRepository
  }) {
    this._userRepository = UserRepository;
  }

  async getUserByEmail(email) {
    return await this._userRepository.getUserByEmail(email);
  }

  async register(user) {
    const {
      email
    } = user;
    const hasUser = await this.getUserByEmail(email);
    if (hasUser) return this.reportError(_helpers.constants.REGISTER);
    const createUser = await this._userRepository.create({ ...user,
      status: "Activo"
    });
    const userEncode = this.buildUserEncode(createUser);
    const token = (0, _helpers.generateToken)(userEncode);
    return {
      token,
      status: 200,
      message: ` Welcome ${userEncode.names}`
    };
  }

  async login(user) {
    const {
      email,
      password
    } = user;
    const hasUser = await this.getUserByEmail(email);
    if (!hasUser || !(0, _bcryptjs.compareSync)(password, hasUser.password)) return this.reportError(_helpers.constants.LOGIN);
    const userEncode = this.buildUserEncode(hasUser);
    const token = (0, _helpers.generateToken)(userEncode);
    return {
      token,
      status: 200,
      user: userEncode,
      msg: `Welcome ${userEncode.names}`
    };
  }

  reportError(option) {
    switch (option) {
      case _helpers.constants.REGISTER:
        (0, _helpers.generateError)(_helpers.constants.STATUS_422, "Email is registered");
        break;

      case _helpers.constants.LOGIN:
        (0, _helpers.generateError)(_helpers.constants.STATUS_422, "Wrong email or password!");

      default:
        break;
    }

    throw error;
  }

  buildUserEncode(user) {
    return {
      uuid: user.uuid,
      names: user.names
    };
  }

}

exports.AuthService = AuthService;