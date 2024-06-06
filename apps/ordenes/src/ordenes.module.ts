import { Module } from '@nestjs/common';
import { OrdenesController } from './ordenes.controller';
import { OrdenesService } from './ordenes.service';

@Module({
  imports: [],
  controllers: [OrdenesController],
  providers: [OrdenesService],
})
export class OrdenesModule {}
