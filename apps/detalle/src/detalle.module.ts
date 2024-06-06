import { Module } from '@nestjs/common';
import { DetalleController } from './detalle.controller';
import { DetalleService } from './detalle.service';

@Module({
  imports: [],
  controllers: [DetalleController],
  providers: [DetalleService],
})
export class DetalleModule {}
