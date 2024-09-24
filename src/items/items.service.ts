import {
  BadRequestException,
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/entity/items.entity';
import { Repository } from 'typeorm';
import { Category } from 'src/entity/categorie.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(Item) private itemRepository: Repository<Item>,
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}
  async create(createItemDto: CreateItemDto) {
    try {
      const newItem = this.itemRepository.create({
        ...createItemDto,
        category: { id: createItemDto.category_id },
        seasons: createItemDto.season_ids.map((id) => ({ id })),
        occasions: createItemDto.occasion_ids.map((id) => ({ id })),
        tags: createItemDto.tag_ids.map((id) => ({ id })),
        colors: createItemDto.color_ids.map((id) => ({ id })),
      });

      return await this.itemRepository.save(newItem);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Item name already exists!');
      }
      throw new BadRequestException(error.message);
    }
  }

  async findAll() {
    return await this.itemRepository.find({
      relations: [
        'category',
        'colors',
        'occasions',
        'seasons',
        'tags',
        'item_photos',
        'clothingAttribute',
        'item_photos.color',
      ],
    });
  }

  async findOne(id: number) {
    return await this.itemRepository.findOneBy({ id });
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    try {
      const item = await this.itemRepository.findOneBy({ id });
      if (!item) {
        throw new NotFoundException('Item Not Found');
      }

      if (updateItemDto?.category_id) {
        const { category_id } = updateItemDto;
        const category = await this.categoryRepository.findOneBy({
          id: category_id,
        });

        if (!category) {
          throw new NotFoundException(
            `Category with id ${category_id} not found`,
          );
        }

        item.category = category;
      }

      Object.assign(item, updateItemDto);

      return await this.itemRepository.save(item);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: number) {
    const item = await this.itemRepository.findOne({ where: { id } });

    if (!item) {
      throw new NotFoundException('Item Not Found');
    }

    await this.itemRepository.remove(item);

    return { message: 'Item deleted successfully.' };
  }

  async deleteAll() {
    return await this.itemRepository.delete({});
  }
}
