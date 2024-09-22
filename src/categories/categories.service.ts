import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/entity/categorie.entity';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category-dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async getAll(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  async filter(category_name: string): Promise<Category[]> {
    return await this.categoryRepository.findBy({ category_name });
  }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    try {
      const newCategory = this.categoryRepository.create(createCategoryDto);
      return await this.categoryRepository.save(newCategory);
    } catch (error) {
      if (error.code === '23505') {
        throw new ConflictException('Category name already exists!');
      }
      throw new BadRequestException();
    }
  }
}
