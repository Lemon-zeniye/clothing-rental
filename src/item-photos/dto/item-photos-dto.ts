import { IsNotEmpty, IsDefined } from 'class-validator';

export class ItemPhotoDto {
  @IsDefined({ message: 'Photo cannot be empty' })
  photo_url: Buffer;

  //   @IsNotEmpty({ message: 'Item reference must be provided' })
  //   item_id: number;
}
