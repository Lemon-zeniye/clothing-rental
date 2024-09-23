import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ItemPhotosService } from './item-photos.service';
import { CreateItemPhotoDto } from './dto/item-photos-dto';

@Controller('item-photos')
export class ItemPhotosController {
  constructor(private itemPhotosService: ItemPhotosService) {}
  @Post(':id')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  uploadFile(
    @Param('id', ParseIntPipe) id: number,
    @Body('color_id', ParseIntPipe)
    colorId: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.itemPhotosService.uploadFile(file, id, colorId);
  }

  @Get()
  getAll() {
    return this.itemPhotosService.getAll();
  }

  @Delete('delete/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.itemPhotosService.remove(id);
  }
}
