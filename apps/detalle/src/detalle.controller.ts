import { Controller, Get } from '@nestjs/common';
import { DetalleService } from './detalle.service';

@Controller()
export class DetalleController {
  constructor(private readonly detalleService: DetalleService) {}

  @Get()
  getHello(): string {
    return this.detalleService.getHello();
  }
}
