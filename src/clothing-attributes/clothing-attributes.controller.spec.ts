import { Test, TestingModule } from '@nestjs/testing';
import { ClothingAttributesController } from './clothing-attributes.controller';

describe('ClothingAttributesController', () => {
  let controller: ClothingAttributesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClothingAttributesController],
    }).compile();

    controller = module.get<ClothingAttributesController>(ClothingAttributesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
