import { NestFactory } from '@nestjs/core';
import { DetalleModule } from './detalle.module';

async function bootstrap() {
  const app = await NestFactory.create(DetalleModule);
  await app.listen(3000);
}
bootstrap();
