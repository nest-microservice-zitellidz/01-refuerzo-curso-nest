import { Test, TestingModule } from '@nestjs/testing';
import { DetalleController } from './detalle.controller';
import { DetalleService } from './detalle.service';

describe('DetalleController', () => {
  let detalleController: DetalleController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DetalleController],
      providers: [DetalleService],
    }).compile();

    detalleController = app.get<DetalleController>(DetalleController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(detalleController.getHello()).toBe('Hello World!');
    });
  });
});
