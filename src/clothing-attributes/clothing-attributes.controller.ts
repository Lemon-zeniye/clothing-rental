import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ClothingAttributesService } from './clothing-attributes.service';
import { CreateClothingAttributesDto } from './dto/create-clothing-attribute-dto';

@Controller('clothing-attributes')
export class ClothingAttributesController {
  constructor(private clothingAttributeService: ClothingAttributesService) {}
  @Post()
  create(@Body() createClothingAttributesDto: CreateClothingAttributesDto) {
    return this.clothingAttributeService.create(createClothingAttributesDto);
  }

  @Get()
  findAll() {
    return this.clothingAttributeService.findAll();
  }

  @Delete('deleteAll')
  removeAll() {
    return this.clothingAttributeService.removeAll();
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.clothingAttributeService.remove(id);
  }
}
