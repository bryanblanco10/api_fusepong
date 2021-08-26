import { BaseService } from "./baseService";

export class TicketService extends BaseService {
  constructor({ TicketRepository }){
    super(TicketRepository);
    this._ticketRepository = TicketRepository;
  }

  async getTicketsByUserHistory(uuid){
    return await this._ticketRepository.getTicketsByUserHistory(uuid);
  }
}
