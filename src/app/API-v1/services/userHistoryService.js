import { BaseService } from "./baseService";

export class UserHistoryService extends BaseService {
  constructor({ UserHistoryRepository }){
    super(UserHistoryRepository);
    this._userHistoryRepository = UserHistoryRepository;
  }

  async getUserHistoriesByProject(uuid){
    return await this._userHistoryRepository.getUserHistoriesByProject(uuid);
  }
}