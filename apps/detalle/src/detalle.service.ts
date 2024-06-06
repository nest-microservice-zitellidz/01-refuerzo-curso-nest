import { Injectable } from '@nestjs/common';

@Injectable()
export class DetalleService {
  getHello(): string {
    return 'Hello World!';
  }
}
