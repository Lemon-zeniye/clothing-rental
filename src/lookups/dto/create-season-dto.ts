import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSeasonDto {
  @IsString()
  @IsNotEmpty()
  season_name: string;
}
