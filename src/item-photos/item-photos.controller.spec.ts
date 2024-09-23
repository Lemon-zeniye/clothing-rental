import { Test, TestingModule } from '@nestjs/testing';
import { ItemPhotosController } from './item-photos.controller';

describe('ItemPhotosController', () => {
  let controller: ItemPhotosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemPhotosController],
    }).compile();

    controller = module.get<ItemPhotosController>(ItemPhotosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
