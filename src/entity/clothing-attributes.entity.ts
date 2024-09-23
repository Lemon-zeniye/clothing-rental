import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Item } from './items.entity';

@Entity('clothingAttributes')
@Unique(['item', 'attribute_name'])
export class ClothingAttribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  attribute_name: string;

  @Column({ type: 'simple-array' })
  attribute_value: string[];

  @ManyToOne(() => Item, (item) => item.clothingAttribute)
  item: Item;
}
