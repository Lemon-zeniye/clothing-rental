import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from './items.entity';

@Entity('seasons')
export class Season {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  season_name: string;

  @ManyToMany(() => Item, (item) => item.seasons)
  items: Item[];
}
