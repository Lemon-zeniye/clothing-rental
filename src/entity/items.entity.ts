import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from './categorie.entity';
import { ClothingAttribute } from './clothing-attributes.entity';
import { ItemPhoto } from './item-photos.entity';

@Entity('items')
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

  @Column()
  price_per_day: number;

  @Column({ default: true })
  availability_status: boolean;

  @ManyToOne(() => Category, (category) => category.items, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  category: Category;

  @OneToMany(
    () => ClothingAttribute,
    (clothingAttribute) => clothingAttribute.item,
  )
  clothingAttribute: ClothingAttribute[];

  @OneToMany(() => ItemPhoto, (itemPhoto) => itemPhoto.item)
  item_photos: ItemPhoto[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
