import { Body, Controller, Get, Post } from '@nestjs/common';
import { LookupsService } from './lookups.service';
import { CreateTagDto } from './dto/create-tag-dto';
import { CreateOccasionDto } from './dto/create-occasion-dto';
import { CreateSeasonDto } from './dto/create-season-dto';
import { CreateColorDto } from './dto/create-color-dto';

@Controller('lookups')
export class LookupsController {
  constructor(private lookupsService: LookupsService) {}

  //tags
  @Post('tag')
  createTag(@Body() createTagDto: CreateTagDto) {
    return this.lookupsService.createTag(createTagDto);
  }

  @Get('tags')
  getTags() {
    return this.lookupsService.getTags();
  }

  //occasions

  @Post('occasion')
  createOccasion(@Body() createOccasionDto: CreateOccasionDto) {
    return this.lookupsService.createOccasion(createOccasionDto);
  }

  @Get('occasions')
  getOccasions() {
    return this.lookupsService.getOccasions();
  }

  //seasons

  @Post('season')
  createSeason(@Body() createSeasonDto: CreateSeasonDto) {
    return this.lookupsService.createSeason(createSeasonDto);
  }

  @Get('seasons')
  getSeasons() {
    return this.lookupsService.getSeasons();
  }

  //colors

  @Post('color')
  createColor(@Body() createColorDto: CreateColorDto) {
    return this.lookupsService.createColor(createColorDto);
  }

  @Get('colors')
  getColors() {
    return this.lookupsService.getColors();
  }
}
