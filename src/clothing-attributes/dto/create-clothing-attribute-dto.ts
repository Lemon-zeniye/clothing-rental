import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateClothingAttributesDto {
  @IsString()
  @IsNotEmpty()
  attribute_name: string;

  @IsArray()
  @IsString({ each: true })
  @IsNotEmpty()
  attribute_value: string[];

  @IsNumber()
  @IsNotEmpty()
  item_id: number;
}
