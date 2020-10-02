import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductTypeEntity } from './entities/product-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductTypeEntity)
    private readonly productTypeRepo: Repository<ProductTypeEntity>,

    @InjectRepository(ProductEntity)
    private readonly productRepo: Repository<ProductEntity>,
  ) {}

  public getTypes(): Promise<ProductTypeEntity[]> {
    return this.productTypeRepo.find();
  }

  public getAllProducts(): Promise<ProductEntity[]> {
    return this.productRepo.find({ order: { id: 'ASC' } });
  }

  public findOneById(id: number): Promise<ProductEntity> {
    return this.productRepo.findOneOrFail(id).catch(() => {
      throw new NotFoundException('Product not found');
    });
  }
}
