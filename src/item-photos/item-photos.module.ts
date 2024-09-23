import { Module } from '@nestjs/common';
import { ItemPhotosController } from './item-photos.controller';
import { ItemPhotosService } from './item-photos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemPhoto } from 'src/entity/item-photos.entity';
import { Item } from 'src/entity/items.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ItemPhoto, Item])],
  controllers: [ItemPhotosController],
  providers: [ItemPhotosService],
})
export class ItemPhotosModule {}
