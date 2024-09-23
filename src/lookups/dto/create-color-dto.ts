import { IsNotEmpty, IsString } from 'class-validator';

export class CreateColorDto {
  @IsString()
  @IsNotEmpty()
  color_name: string;
}
