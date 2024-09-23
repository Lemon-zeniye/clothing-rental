import { IsNotEmpty, IsDefined, IsNumber } from 'class-validator';

export class CreateItemPhotoDto {
  //   @IsDefined({ message: 'Photo cannot be empty' })
  //   photo_url: Buffer;

  //   @IsNumber()
  //   @IsNotEmpty({ message: 'Item reference must be provided' })
  //   item_id: number;

  @IsNumber()
  @IsNotEmpty()
  color_id: string;
}
