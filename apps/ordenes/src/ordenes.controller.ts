import { Controller, Get } from '@nestjs/common';
import { OrdenesService } from './ordenes.service';

@Controller()
export class OrdenesController {
  constructor(private readonly ordenesService: OrdenesService) {}

  @Get()
  getHello(): string {
    return this.ordenesService.getHello();
  }
}
