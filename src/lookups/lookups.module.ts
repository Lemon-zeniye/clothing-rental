import { Module } from '@nestjs/common';
import { LookupsController } from './lookups.controller';
import { LookupsService } from './lookups.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from 'src/entity/tag.entity';
import { Occasion } from 'src/entity/occasion.entity';
import { Season } from 'src/entity/season.entity';
import { Color } from 'src/entity/color.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Occasion, Season, Tag, Color])],
  controllers: [LookupsController],
  providers: [LookupsService],
})
export class LookupsModule {}
