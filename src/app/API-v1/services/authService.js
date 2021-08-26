import { compareSync, genSaltSync, hashSync } from "bcryptjs";
import { generateToken, generateError, constants } from "../helpers";

export class AuthService {
  constructor({ UserRepository }) {
    this._userRepository = UserRepository;
  }

  async getUserByEmail(email) {
    return await this._userRepository.getUserByEmail(email);
  }

  async register(user) {
    const { email } = user;
    const hasUser = await this.getUserByEmail(email);

    if (hasUser) return this.reportError(constants.REGISTER);

    const createUser = await this._userRepository.create({
      ...user,
      status: "Activo",
    });
    const userEncode = this.buildUserEncode(createUser);
    const token = generateToken(userEncode);

    return {
      token,
      status: 200,
      message: ` Welcome ${userEncode.names}`,
    };
  }

  async login(user) {
    const { email , password } = user;

    const hasUser = await this.getUserByEmail(email);

    if(!hasUser || !compareSync(password, hasUser.password)) 
      return this.reportError(constants.LOGIN);
    
    const userEncode = this.buildUserEncode(hasUser);
    const token = generateToken(userEncode);
    
    return {
      token,
      status: 200,
      user: userEncode,
      msg: `Welcome ${userEncode.names}`
    }


  }

  reportError(option) {
    switch (option) {
      case constants.REGISTER:
        generateError(constants.STATUS_422, "Email is registered");
        break;
      case constants.LOGIN:
        generateError(constants.STATUS_422, "Wrong email or password!");
      default:
        break;
    }
    throw error;
  }

  buildUserEncode(user) {
    return {
      uuid: user.uuid,
      names: user.names,
    };
  }
}
