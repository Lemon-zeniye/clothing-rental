import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from './items.entity';

@Entity('colors')
export class Color {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  color_name: string;

  @ManyToMany(() => Item, (item) => item.colors)
  items: Item[];
}
