import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemPhoto } from 'src/entity/item-photos.entity';
import { Item } from 'src/entity/items.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItemPhotosService {
  constructor(
    @InjectRepository(ItemPhoto)
    private itemPhotoRepository: Repository<ItemPhoto>,
    @InjectRepository(Item) private itemRepository: Repository<Item>,
  ) {}
  async uploadFile(file: Express.Multer.File, id: number) {
    if (!file) {
      throw new BadRequestException('No file uploaded!');
    }
    const fielData = {
      filename: file.originalname,
      data: file.buffer,
      mimetype: file.mimetype,
    };
    const item = await this.itemRepository.findOneBy({ id });

    if (!item) {
      throw new NotFoundException('Item not found!');
    }

    const payload = {
      photo: fielData,
      item: item,
    };

    return await this.itemPhotoRepository.save(payload);
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
