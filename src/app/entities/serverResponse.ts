import {Question} from './question';

export class ServerResponse {
  constructor(public response_code: string, public results: Question[]) {}
}
