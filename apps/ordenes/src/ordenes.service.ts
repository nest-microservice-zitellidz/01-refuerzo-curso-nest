import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdenesService {
  getHello(): string {
    return 'Hello World!';
  }
}
