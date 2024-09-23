import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOccasionDto {
  @IsString()
  @IsNotEmpty()
  occasion_name: string;
}
