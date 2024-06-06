import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { envs } from './config/envs';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe(
    {
      whitelist: true,  // remueve propiedades que no estén en el DTO
      forbidNonWhitelisted: true, // lanza un error si hay propiedades no permitidas
      transform: true,  // transforma los tipos de datos a los especificados en el DTO
      transformOptions: { // habilita la conversión automática de parámetros de ruta
        enableImplicitConversion: true,   // convierte los parámetros de ruta a su tipo de dato especificado en el DTO
      },
    }
  ));

  app.setGlobalPrefix('api');

  await app.listen(envs.PORT);
  console.log(`Aplicación corriendo en el puerto ${envs.PORT} y en modo ${envs.NODE_ENV} 🚀`);
}
bootstrap();
