import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClothingAttribute } from 'src/entity/clothing-attributes.entity';
import { Repository } from 'typeorm';
import { CreateClothingAttributesDto } from './dto/create-clothing-attribute-dto';
import { Item } from 'src/entity/items.entity';

@Injectable()
export class ClothingAttributesService {
  constructor(
    @InjectRepository(ClothingAttribute)
    private attributeRepository: Repository<ClothingAttribute>,
    @InjectRepository(Item) private itemREpository: Repository<Item>,
  ) {}
  async create(createClothingAttributesDto: CreateClothingAttributesDto) {
    try {
      const { item_id } = createClothingAttributesDto;

      const item = await this.itemREpository.findOneBy({ id: item_id });

      if (!item) {
        throw new NotFoundException('Item Not Found');
      }

      const new_attribute = this.attributeRepository.create(
        createClothingAttributesDto,
      );

      new_attribute.item = item;
      return await this.attributeRepository.save(new_attribute);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Attribute name already exists');
      }
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    return await this.attributeRepository.find({ relations: ['item'] });
  }

  async remove(id: number) {
    const clothing_attribute = await this.attributeRepository.findOneBy({ id });

    if (!clothing_attribute) {
      throw new NotFoundException('Attribute Not Found');
    }

    return await this.attributeRepository.remove(clothing_attribute);
  }
  async removeAll() {
    return await this.attributeRepository.delete({});
  }
}
