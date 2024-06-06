import { NestFactory } from '@nestjs/core';
import { ClientGatewayModule } from './client-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(ClientGatewayModule);
  await app.listen(3000);
}
bootstrap();
