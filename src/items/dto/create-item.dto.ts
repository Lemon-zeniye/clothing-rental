import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  category_id: number;

  @IsNumber()
  @IsNotEmpty()
  price_per_day: number;

  @IsBoolean()
  @IsOptional()
  availability_status: boolean;

  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  tag_ids: number[];

  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  season_ids: number[];

  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  occasion_ids: number[];

  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  color_ids: number[];
}
