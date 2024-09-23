import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Item } from './items.entity';
import { ItemPhoto } from './item-photos.entity';

@Entity('colors')
export class Color {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  color_name: string;

  @ManyToMany(() => Item, (item) => item.colors)
  items: Item[];

  @OneToMany(() => ItemPhoto, (photo) => photo.color)
  item_photos: ItemPhoto[];
}
