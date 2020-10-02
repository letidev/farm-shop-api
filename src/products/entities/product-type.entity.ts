import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('product_type')
export class ProductTypeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;
}
