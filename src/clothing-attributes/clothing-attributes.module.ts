import { Module } from '@nestjs/common';
import { ClothingAttributesController } from './clothing-attributes.controller';
import { ClothingAttributesService } from './clothing-attributes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClothingAttribute } from 'src/entity/clothing-attributes.entity';
import { Item } from 'src/entity/items.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClothingAttribute, Item])],
  controllers: [ClothingAttributesController],
  providers: [ClothingAttributesService],
})
export class ClothingAttributesModule {}
