import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Category } from './categorie.entity';
import { ClothingAttribute } from './clothing-attributes.entity';
import { ItemPhoto } from './item-photos.entity';
import { Tag } from './tag.entity';
import { Season } from './season.entity';
import { Occasion } from './occasion.entity';
import { Color } from './color.entity';

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

  @ManyToMany(() => Tag, (tag) => tag.items)
  tags: Tag[];

  @ManyToMany(() => Season, (season) => season.items)
  seasons: Season[];

  @ManyToMany(() => Occasion, (occasion) => occasion.items)
  occasions: Occasion[];

  @ManyToMany(() => Color, (color) => color.items)
  colors: Color[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
