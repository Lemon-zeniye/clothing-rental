import { Test, TestingModule } from '@nestjs/testing';
import { ClothingAttributesService } from './clothing-attributes.service';

describe('ClothingAttributesService', () => {
  let service: ClothingAttributesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClothingAttributesService],
    }).compile();

    service = module.get<ClothingAttributesService>(ClothingAttributesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
