import { BaseService } from "./baseService";

export class UserService extends BaseService {
  constructor({ UserRepository }){
    super(UserRepository);
    this._userRepository = UserRepository;
  }

  async getUserByUuid(uuid){
    return this._userRepository.getUserByUuid(uuid);
  }
}