import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from './items.entity';

@Entity('itemPhotos')
export class ItemPhoto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('bytea')
  photo: Buffer;

  @ManyToOne(() => Item, (item) => item.item_photos)
  item: Item;
}
