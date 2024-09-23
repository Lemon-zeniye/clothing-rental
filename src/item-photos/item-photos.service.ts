import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemPhoto } from 'src/entity/item-photos.entity';
import { Item } from 'src/entity/items.entity';
import { Repository } from 'typeorm';
import { CreateItemPhotoDto } from './dto/item-photos-dto';
import { Color } from 'src/entity/color.entity';

@Injectable()
export class ItemPhotosService {
  constructor(
    @InjectRepository(ItemPhoto)
    private itemPhotoRepository: Repository<ItemPhoto>,
    @InjectRepository(Item) private itemRepository: Repository<Item>,
    @InjectRepository(Color) private colorRepository: Repository<Color>,
  ) {}
  async uploadFile(file: Express.Multer.File, id: number, colorId: number) {
    if (!file) {
      throw new BadRequestException('No file uploaded!');
    }
    const item = await this.itemRepository.findOneBy({ id });
    const color = await this.colorRepository.findOneBy({
      id: colorId,
    });

    if (!item || !color) {
      throw new NotFoundException('Invalid item or color!');
    }

    const fielData = {
      filename: file.originalname,
      data: file.buffer,
      mimetype: file.mimetype,
    };

    const payload = {
      photo: fielData,
      item,
      color,
    };

    return await this.itemPhotoRepository.save(payload);
  }

  async getAll() {
    return await this.itemPhotoRepository.find();
  }

  async remove(id: number) {
    const item_photo = await this.itemPhotoRepository.findOneBy({ id });

    if (!item_photo) {
      throw new NotFoundException('Photo not found');
    }
    await this.itemPhotoRepository.remove(item_photo);
    return { message: 'Photo deleted' };
  }
}
