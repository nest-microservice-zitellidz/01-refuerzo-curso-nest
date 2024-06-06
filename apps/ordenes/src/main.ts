import { NestFactory } from '@nestjs/core';
import { OrdenesModule } from './ordenes.module';

async function bootstrap() {
  const app = await NestFactory.create(OrdenesModule);
  await app.listen(3000);
}
bootstrap();
