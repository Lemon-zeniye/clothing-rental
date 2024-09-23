import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from './items.entity';

@Entity('occasions')
export class Occasion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  occasion_name: string;

  @ManyToMany(() => Item, (item) => item.occasions)
  items: Item[];
}
