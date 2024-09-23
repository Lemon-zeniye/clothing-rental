import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Color } from 'src/entity/color.entity';
import { Occasion } from 'src/entity/occasion.entity';
import { Season } from 'src/entity/season.entity';
import { Tag } from 'src/entity/tag.entity';
import { Repository } from 'typeorm';
import { CreateTagDto } from './dto/create-tag-dto';
import { CreateOccasionDto } from './dto/create-occasion-dto';
import { CreateSeasonDto } from './dto/create-season-dto';
import { CreateColorDto } from './dto/create-color-dto';

@Injectable()
export class LookupsService {
  constructor(
    @InjectRepository(Tag) private tagRepository: Repository<Tag>,
    @InjectRepository(Occasion)
    private occasionRepository: Repository<Occasion>,
    @InjectRepository(Color) private colorRepository: Repository<Color>,
    @InjectRepository(Season) private seasonRepository: Repository<Season>,
  ) {}

  //tag
  createTag(createTagDto: CreateTagDto) {
    const tag = this.tagRepository.create(createTagDto);
    return this.tagRepository.save(tag);
  }

  getTags() {
    return this.tagRepository.find();
  }

  //occasion
  createOccasion(createOccasionDto: CreateOccasionDto) {
    const tag = this.occasionRepository.create(createOccasionDto);
    return this.occasionRepository.save(tag);
  }

  getOccasions() {
    return this.occasionRepository.find();
  }

  //season
  createSeason(createSeasonDto: CreateSeasonDto) {
    const tag = this.seasonRepository.create(createSeasonDto);
    return this.seasonRepository.save(tag);
  }

  getSeasons() {
    return this.seasonRepository.find();
  }

  //color
  createColor(createColorDto: CreateColorDto) {
    const tag = this.colorRepository.create(createColorDto);
    return this.colorRepository.save(tag);
  }

  getColors() {
    return this.colorRepository.find();
  }
}
