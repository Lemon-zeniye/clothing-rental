import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from './items.entity';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tag_name: string;

  @ManyToMany(() => Item, (item) => item.tags)
  items: Item[];
}
