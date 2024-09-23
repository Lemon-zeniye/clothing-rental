import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Item } from './items.entity';
import { Color } from './color.entity';

@Entity('itemPhotos')
export class ItemPhoto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('bytea')
  photo: Buffer;

  @ManyToOne(() => Item, (item) => item.item_photos)
  item: Item;

  @ManyToOne(() => Color, (color) => color.item_photos)
  color: Color;
}
