import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ProductTypeEntity } from './product-type.entity';
import { MoenyTransformer } from '../../common/utils/money-transformer';

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @JoinColumn()
  @ManyToOne(() => ProductTypeEntity, { eager: true, nullable: false })
  type: ProductTypeEntity;

  @Column({
    nullable: false,
    type: 'decimal',
    transformer: new MoenyTransformer(),
  })
  price: string;
}
