import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('brands')
export class Brand {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  brand_name: string;
}
