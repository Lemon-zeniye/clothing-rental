import { Test, TestingModule } from '@nestjs/testing';
import { ItemPhotosService } from './item-photos.service';

describe('ItemPhotosService', () => {
  let service: ItemPhotosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ItemPhotosService],
    }).compile();

    service = module.get<ItemPhotosService>(ItemPhotosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
