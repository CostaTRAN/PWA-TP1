import { Injectable } from '@nestjs/common';
import { HelloMessage } from './hellomessage';

@Injectable()
export class AppService {
  getHello(name:string): HelloMessage {
    return JSON.parse(`{"hello": "${name}"}`);
  }
}
